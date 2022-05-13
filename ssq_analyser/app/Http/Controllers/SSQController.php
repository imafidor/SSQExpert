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

 function getCoreSpecializations(){
    $biochemistry_ssq= new HNDSLTBiochemistry;
    return $biochemistry_ssq->getCoreSpecializations();
 }
 function getRelatedCourses(){
     $biochemistry_ssq = new HNDSLTBiochemistry;
     return $biochemistry_ssq->getRelatedCourses();
 }
 function getServiceCourses(){
     $biochemistry_ssq= new HNDSLTBiochemistry;
    //  array_keys($this->getServiceCourses());
     return array_keys($biochemistry_ssq->getServiceCourses());
 }
 function getServiceTitles(){
     $biochemistry_ssq = new HNDSLTBiochemistry;
     return array_values(array_unique($biochemistry_ssq->getServiceCourses()));
 }
 function getProffessionalBodies(){
    $biochemistry_ssq = new HNDSLTBiochemistry;
    return $biochemistry_ssq->getProffessionalBodies();
}

}
