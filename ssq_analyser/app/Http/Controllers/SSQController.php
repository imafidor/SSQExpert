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

function getLabEquipments(Request $request){
    $biochemistry_ssq= new HNDSLTBiochemistry;
    $labs = $request->get('labs');
    $result = [];
    foreach($labs as $lab){
$result[$lab]= array_keys($biochemistry_ssq::LABORATORIES[$lab]);
   }
    
    return $result;
}

}
