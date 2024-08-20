<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DynamicHostelTable extends Model
{
    protected $table;

    public function setTableName($tableName)
    {
        $this->table = $tableName;
    }
}

