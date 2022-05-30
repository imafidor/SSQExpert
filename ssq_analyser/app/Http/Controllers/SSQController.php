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
 function getResult(Request $request){
     $biochemistry_ssq = new HNDSLTBiochemistry;
     
     $goalsAndObjectivesAssessment= $biochemistry_ssq->getGoalsAndObjectivesAssessment($request->goalsAndObjectives);
     $curriculumAssessment= $biochemistry_ssq->getCurriculumAssessment($request->curriculum);
     $classroomAssessment = $biochemistry_ssq->getClassroomsAssessment($request->classrooms);    
     $laboratoriesAssessment = $biochemistry_ssq->getLaboratoriesAssessment(array_keys($request->laboratories),$request->labSpecs, $request->laboratories);
     $libraryAssessment = $biochemistry_ssq->getLibraryAssessment($request->books, $ebooks, $journals, $ejournals);
     $staffOfficesAssessment = $biochemistry_ssq->getStaffOfficesAssessment($request->staffOffices,$request->teachingStaff);
     $teachingStaffAssessment = $biochemistry_ssq->getTeachingStaffAssessment($request->teachingStaff);
     $serviceStaffAssessment =$biochemistry_ssq->getServiceStaffAssessment($request->serviceStaff);
    $technicalStaffAssessment = $biochemistry_ssq->getTechnicalStaffAssessment($request->technicalStaff);
    $HODAssessment = $biochemistry_ssq->getHODAssessment($request->HeadOfDepartment);
    $administrativeStaffAssessment = $biochemistry_ssq->getAdministrativeStaffAssessment($request->administrativeStaff);
    
    $goalsAndObjectives['data']= $request->goalsAndObjectives;
    $goalsAndObjectives['majorDeficiencies']= $goalsAndObjectivesAssessment['majorDeficiencyGoals']; 
    $goalsAndObjectives['assessment'] = $goalsAndObjectivesAssessment['assessment'];
     $biochemistry_ssq->GoalsAndObjectives=$goalsAndObjectives;
    
    $curriculum['data']= $request->curriculum;
    $curriculum['majorDeficiencies']= $curriculumAssessment['majorDeficienciesCurriculum'];
    $curriculum['minorDeficiencies'] = $curriculumAssessment['minorDeficienciesCurriculum'];
    $curriculum['assessment'] = $curriculumAssessment['assessment'];
    $biochemistry_ssq->Curriculum= $curriculum;

    $classrooms['data']= $request->classrooms;
    $classrooms['majorDeficiencies']= $classroomAssessment['majorDeficienciesClassrooms'];
    $classrooms['minorDeficiencies']= $classroomAssessment['minorDeficienciesClassrooms'];
    $classrooms['assessment']= $classroomAssessment['assessment'];
    $biochemistry_ssq->Classrooms=$classrooms;

    $laboratories['data']= $request->laboratories;
    $laboratories['labSpecs']= $request->labSpecs;
    $laboratories['labDeficiencies']=$laboratoriesAssessment['labDeficiencies'];
    $laboratories['hasLabDeficiency']= $laboratoriesAssessment['hasLabDeficiency'];
    $laboratories['majorDeficiencies']= $laboratoriesAssessment['majorDeficienciesLaboratories'];
    $laboratories['minorDeficiencies']= $laboratoriesAssessment['minorDeficienciesLaboratories'];
    $laboratories['assessment']= $laboratoriesAssessment['assessment'];
    $biochemistry_ssq->Laboratories=$laboratories;

    

    $staffOffices['data']= $request->staffOffices;
    $staffOffices['majorDeficiencies']= $staffOfficesAssessment['majorDeficienciesStaffOffices'];
    $staffOffices['minorDeficiencies']= $staffOfficesAssessment['minorDeficienciesStaffOffices'];
    $staffOffices['assessment'] = $staffOfficesAssessment['assessment'];
    $biochemistry_ssq->StaffOffices= $staffOffices;

    $library['data']= array("books" =>$request->books,"ebooks"=>$request->ebooks,"journals"=>$request->journals,"e-journals"=>$request->ejournals);
    $library['majorDeficiencies']= $libraryAssessment['majorDeficienciesLibrary'];
    $library['minorDeficiencies']= $libraryAssessment['minorDeficienciesLibrary'];
    $library['assessment']= $libraryAssessment['assessment'];
    $biochemistry_ssq->Library=$library;
    
     $teachingStaff['data']= $request->teachingStaff;
     $teachingStaff['majorDeficiencies']= $teachingStaffAssessment['majorDeficienciesTeachingStaff'];
     $teachingStaff['minorDeficiencies'] = $teachingStaffAssessment['minorDeficienciesTeachingStaff'];
     $teachingStaff['assessment']= $teachingStaffAssessment['assessment'];
     $biochemistry_ssq->TeachingStaff= $teachingStaff;

     $serviceStaff['data']= $request->serviceStaff;
     $serviceStaff['majorDeficiencies']= $serviceStaffAssessment['majorDeficienciesServiceStaff'];
     $serviceStaff['minorDeficiencies']= $serviceStaffAssessment['minorDeficienciesServiceStaff'];
     $serviceStaff['assessment']= $serviceStaffAssessment['assessment'];
     $biochemistry_ssq->ServiceStaff= $serviceStaff;



     $technicalStaff['data']= $request->technicalStaff;
     $technicalStaff['majorDeficiencies']= $technicalStaff['majorDeficienciesTechnicalStaff'];
     $technicalStaff['minorDeficiencies']= $technicalStaff['minorDeficienciesTechnicalStaff'];
     $technicalStaff['assessment']= $technicalStaff['assessment'];
     $biochemistry_ssq->TechnicalStaff= $technicalStaff;
    

    $HOD['data']=$request->HeadOfDepartment;
    $HOD['majorDeficiencies']= $HODAssessment['majorDeficienciesHOD'];
    $HOD['minorDeficiencies']= $HODAssessment['minorDeficienciesHOD'];
    $HOD['assessment']=$HODAssessment['assessment'];
    $biochemistry_ssq->HOD= $HOD;
    
    $administrativeStaff['data']= $request->administrativeStaff;
    $administrativeStaff['majorDeficiencies']= $administrativeStaff['majorDeficienciesAdministrativeStaff'];
    $administrativeStaff['minorDeficiencies'] = $administrativeStaff['minorDeficienciesAdministrativeStaff'];
    $administrativeStaff['assessment']= $administrativeStaff['assessment'];
    $biochemistry_ssq->AdministrativeStaff= $administrativeStaff;

    $majorDeficiencies= $biochemistry_ssq->getMajorDeficiencies();
    $minorDeficiencies= $biochemistry_ssq->getMinorDeficiencies();

     

    $finalResult= $biochemistry_ssq->getFinalResult();
   $biochemistry_ssq->MajorDeficiencies= $majorDeficiencies;
   $biochemistry_ssq->MinorDeficiencies = $minorDeficiencies;
   $biochemistry_ssq->Recommendation= $finalResult;

$error="";
   try {
    $biochemistry_ssq->save();
       //code...
   } catch (\Exception $e) {
       $error= $e->getMessage();
   }
  


   if($biochemistry_ssq) {
    return response()->json([
    'status' => 'success',
    'data' => $biochemistry_ssq
    ]);
    }
    
    return response()->json([
        'status' => 'fail',
        'message' => 'failed to create content_arr record',
        'error'=>$error
        ]);

}
 function getCoreSpecializations(){
    $biochemistry_ssq= new HNDSLTBiochemistry;
    return $biochemistry_ssq->getCoreSpecializations();
 }
 function getRelatedCourses(){
     $biochemistry_ssq = new HNDSLTBiochemistry;
   $biochemistry_ssq->pushFour();
    return $biochemistry_ssq->getMajorDeficiencies(); 
    // return $biochemistry_ssq->getRelatedCourses();
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
