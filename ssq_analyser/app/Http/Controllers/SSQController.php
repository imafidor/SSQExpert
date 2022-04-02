<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\HNDSLTBiochemistry;
class SSQController extends Controller
{
    //

function index(){
    $biochemistry_ssq= new HNDSLTBiochemistry;
    
return $biochemistry_ssq->getGoalsAndObjectives();
}
function labs(){
  
    $biochemistry_ssq= new HNDSLTBiochemistry;
    return $biochemistry_ssq->getLaboratories(); 
}

function getLabEquipments($lab){
    $biochemistry_ssq= new HNDSLTBiochemistry;
    return array_keys($biochemistry_ssq::LABORATORIES[$lab]);
}

}
