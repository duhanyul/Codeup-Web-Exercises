<?php
    /**
     *
     */
    class Model
    {
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
    }

 ?>
