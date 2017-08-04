<?php
class CanOfSoda{
  public $brandName;

  public $isFull = true;

  public $isOpen = false;

  public $expirationDate;

  public function openSoda(){
    if (!$this->isOpen) {
      $this->isOpen = true;
      return $this->isOpen;
    }else
    return 'the soda is open already' . PHP_EOL;
  }

  public function pourOut(){
    if ($this->openSoda()) {
      $this->isfull = false;
    }else {
      return 'open the soda first!' . PHP_EOL;
    }
  }
}
