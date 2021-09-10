<?php

namespace App\Http\Controllers;

use App\Models\Notes;
use App\Models\Tags;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function addNote(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'tags' => 'required',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            $error = $validator->errors()->all(':message');
            $response = [
                'status' => false,
                'code' => 403,
                'message' => $error[0],
                'data' => $errors
            ];

            return response()->json($response);

        } else {

           $note = new Notes();
           $note->title = $request->title;
           $note->description = $request->description;
           $note->save();

           if ($note) {
               $tags = explode(",",$request->tags);

               if (count($tags) > 0) {
                   foreach ($tags as $tag) {
                        $dbTag = Tags::find($tag);
                        if ($dbTag) {
                            DB::table('notes_tags')->insert([
                                'note_id' => $note->id,
                                'tag_id' => $dbTag->id,
                            ]);
                        }
                   }
               }
           }

            $response = [
                'status' => true,
                'code' => 200,
                'message' => 'Note added successfully.',
                'data' => Notes::with('tags')->orderBy('id','desc')->get()
            ];

            return response()->json($response);

        }
    }

    public function notes(Request $request) {

        $notes = Notes::with('tags')->orderBy('id','desc')->get();

        $response = [
            'status' => true,
            'code' => 200,
            'message' => 'Notes list.',
            'data' => $notes
        ];

        return response()->json($response);
    }

    public function deleteNote(Request $request,$id) {

        $note = Notes::find($id);

        if ($note) {
            $note->delete();
        }

        if ($note) {
            $response = [
                'status' => true,
                'code' => 200,
                'message' => 'Note deleted successfully.',
                'data' => Notes::with('tags')->orderBy('id','desc')->get(),
            ];

            return response()->json($response);
        } else  {
            $response = [
                'status' => false,
                'code' => 500,
                'message' => 'Note is already deleted.',
                'data' => [],
            ];

            return response()->json($response);
        }
    }

    public function addTag(Request $request) {

        $validator = Validator::make($request->all(), [
            'name' => 'required|unique:tags,name',
        ]);

        if ($validator->fails()) {
            $errors = $validator->errors();
            $error = $validator->errors()->all(':message');
            $response = [
                'status' => false,
                'code' => 403,
                'message' => $error[0],
                'data' => $errors
            ];

            return response()->json($response);
        } else {

            $tag = new Tags();
            $tag->name = $request->name;
            $tag->save();

            if ($tag) {
                $response = [
                    'status' => true,
                    'code' => 200,
                    'message' => 'Tag added successfully.',
                    'data' => $tag
                ];

                return response()->json($response);
            }

        }
    }

    public function getTags(Request $request) {

        $tags = Tags::all();

        $response = [
            'status' => true,
            'code' => 200,
            'message' => 'Tags list.',
            'data' => $tags
        ];

        return response()->json($response);
    }

    public function deleteTag(Request $request,$id) {

        $tags = Tags::find($id);
        if ($tags) {

            $notesCount = DB::table('notes_tags')->where('tag_id',$tags->id)->count();

            if ($notesCount > 0) {
                $response = [
                    'status' => false,
                    'code' => 500,
                    'message' => 'Sorry! Can not delete tag which are associated with note.',
                    'data' => []
                ];

                return response()->json($response);
            }

            $tags->delete();
        }

        $response = [
            'status' => true,
            'code' => 200,
            'message' => 'Tag deleted successfully.',
            'data' => Tags::all(),
        ];

        return response()->json($response);
    }
}
