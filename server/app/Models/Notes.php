<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notes extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function tags() {
        return $this->belongsToMany(Tags::class,'notes_tags','note_id','tag_id');
    }
}
