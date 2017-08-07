<?php
class Log
{
 public $fileName;
 public $handle;

 public function __construct($prefix = 'log '){
   $this->fileName = $prefix . date('Y-m-d');
   $this->handle = fopen($this->fileName . '.log','a');
 }

 public function info($input){
   $this->logMessage("INFO",$input);
 }

 public function error($input){
   $this->logMessage("ERROR",$input);
 }

 public function logMessage($logLevel, $message)
 {
    $logDate = $this->fileName .' ' . date('h:i:s');

    fwrite($this->handle,$logDate . " [$logLevel] $message" . PHP_EOL);
  }

  public function __destruct(){
    fclose($this->handle);
  }
}
