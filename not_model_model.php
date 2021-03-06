<?php
    /**
     *
     */
    class Model
    {
        protected static $table;

        private $attributes = [];

        public function __set($attr,$value){
            $this->attributes["$attr"] = $value;
        }

        public function __get($attr){
            if (array_key_exists($attr,$this->attributes)) {
                return $this->attributes["$attr"];
            }else {
                return "attribute: $attr does not exist";
            }

        }

        public static function getTableName(){
            return static::$table;
        }
    }

 ?>
