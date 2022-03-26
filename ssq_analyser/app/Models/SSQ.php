<?php

namespace App\Models;
use ThibaudDauce\EloquentInheritanceStorage\ParentTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class SSQ extends Model
{
   //use ParentTrait;
    use HasFactory;
    //protected $table = 'characters';
    protected $primaryKey = 'key';
    protected $table = 'SSQs';
    protected $fillable = ['GoalsAndObjectives', 'Curriculum','Classrooms',
    'Laboratories', 'StaffOffices', 'Library',
    'TeachingStaff','ServiceStaff' , 'TechnicalStaff',
    'HOD' ,'AdministrativeStaff','Recommendations',
    'MajorDeficiencies','MinorDeficiencies'];

     protected $casts = [
        'GoalsAndObjectives' => 'array',
        'Curriculum' => 'array',
        'Classrooms' => 'array',
        'Laboratories' => 'array',
        'StaffOffices' => 'array',
        'Library' => 'array',
        'TeachingStaff' => 'array',
         'ServiceStaff' => 'array',
        'TechnicalStaff' => 'array',
         'HOD' => 'array',
         'AdministrativeStaff' => 'array',
         'Recommendations' => 'array',
         'MajorDeficiencies' => 'array',
         'MinorDeficiencies' => 'array'
        ];

        protected $majorDeficiencies=array();
        protected $minorDeficiencies=array();
        protected $requiredNoOfStaffOffices = 0;


        public function getInstitution()
    {
        return $this->belongsTo(Institution::class);
    }
protected function getGoalsAndObjectivesAssessment($response){
    return $response;
}
protected function getCurriculumAssessment($response){

    return $response;
}
protected function getClassroomsAssessment($classrooms){
    $minorDeficienciesClassrooms=[];
    $majorDeficienciesClassrooms=[];
    $assessment= Assessment::POOR;
//Check whether the number of Classrooms is adequate
    if($classrooms['Classrooms']['Number'] < 2){
        array_push($majorDeficienciesClassrooms,"Not enough classrooms for the programme");
        $assessment= Assessment::POOR;
    }

    // Check whether the size of the classrooms is big enough
    if($classrooms['Classrooms']['Size'] < 72){
    array_push($majorDeficienciesClassrooms,"Size of the classrooms is too small");
    $assessment= Assessment::POOR;

  }
  //Check whether the size of the clasrooms is conducive for learning
  if($classrooms['Classrooms']['Size'] > 144){
    array_push($majorDeficienciesClassrooms,"Size of  the classrooms is too large");
    $assessment= Assessment::POOR;
  }
  //Check the classrooms are enough for sitting Capacity
  if($classrooms['Classrooms']['Capacity']< 40){
    array_push($majorDeficienciesClassrooms,"Capacity of the classroom must be able to accommodate one stream");
    $assessment= Assessment::POOR;
  }
  // Check whether they have enough number of Lecture Theatres for General Service Courses
  if($classrooms['LectureTheatre']['Number'] < 1){
    array_push($minorDeficienciesClassrooms,"Lecture theatre must be provided to accommodate General courses");    
   if (count($majorDeficienciesClassrooms)==0){
      $assessment= Assessment::FAIR;
   }
}
//Check whether the size of the Lecture Theatre is enough for General Courses 
if($classrooms['LectureTheatre']['Size']< 200){
    array_push($minorDeficienciesClassrooms,"Lecture theatre provided is too small");    
    if (count($majorDeficienciesClassrooms)==0){
       $assessment= Assessment::FAIR;
    }
}
// Check whether the capacity of the Lecture Theatre 
if($classrooms['LectureTheatre']['Capacity']< 200){
    array_push($minorDeficienciesClassrooms,"Capacity of Lecture theatre provided is not enough");    
    if (count($majorDeficiencyiesClassrooms)==0){
       $assessment= Assessment::FAIR;
    }
}//Give assessment to be good if the above conditions are satisfied
else{
    $assessment= Assessment::GOOD;
}


//Compile Results
$result=[];
array_push($this->majorDeficiencies,$majorDeficienciesClassrooms);
array_push($this->minorDeficiencies,$minorDeficienciesClassrooms);
$result['assessment']=$assessment;
$result['majorDeficienciesClassrooms']=$majorDeficienciesClassrooms;
$result['minorDeficienciesClassrooms']=$minorDeficienciesClassrooms;

    return $result;
}
protected function getStaffOfficesAssessment($offices, $coreLecturers){
 
$aboveSeniorLecturer=0;        
 $minorDeficienciesStaffOffices=array();
    $majorDeficienciesStaffOffices=array();
    $assessment= Assessment::POOR;
    
    //Count the number of Lecturers Above Senior Lecturer
foreach($coreLecturers as $coreLecturer){
    if(array_search($coreLecturer['Rank'], this::RANK_INDEX) >= 9){
        $aboveSeniorLecturer++;
    }
}

    // Calculate the required number of Staff Offices 
$requiredNoOfStaffOffices = round(((count($coreLecturers)  -  $aboveSeniorLecturer)* 0.5) + $aboveSeniorLecturer);
 
if(count($offices)< $requiredNoOfStaffOffices){
     array_push($majorDeficienciesStaffOffices,"Staff Offices are not enough to cater for the accommodation according to NBTE minimum requirements");
     $assessment= Assessment::POOR;
    }else{
        $assessment= Assessment::GOOD;
    }

    // Compile results
    $result=array();
    array_push($this->majorDeficiencies,$majorDeficienciesStaffOffices);
    array_push($this->minorDeficiencies,$minorDeficienciesStaffOffices);
    $result['assessment']=$assessment;
    $result['majorDeficienciesStaffOffices']=$majorDeficienciesStaffOffices;
    $result['minorDeficienciesStaffOffices']=$minorDeficienciesStaffOffices;
    
        return $result;
}
protected function getAdministrativeStaffAssessment($AdministrativeStaffs){
    $hasNDOTM= false;
    $hasHNDOTM =false;
  $appointments= array();
  $minorDeficienciesAdministrativeStaff=array();
  $majorDeficienciesAdministrativeStaff=array();
  $assessment= Assessment::POOR;
    
  
  foreach($AdministrativeStaffs as $administrativeStaff){
  //Compile all appointments of Administrative Staff
    array_push($appointments,$AdministrativeStaffs['appointment']);
  
    //Check whether the Secretary of the administrative staff has ND or HND in Office Technology Management 
      if($administrativeStaff['appointment']=="Secretary"){
        if(in_array("Office Technology Management",$administrativeStaff['First Qualification']) && in_array("ND",$administrativeStaff['First Qualification']) || in_array("Secretariat Studies", $administrativeStaff['First Qualification']) && in_array("ND",$administrativeStaff['First Qualification'])){
          $hasNDOTM=true;
        }
        if(in_array("Office Technology Management",$administrativeStaff['Second Qualification']) && in_array("HND",$administrativeStaff['Second Qualification']) || in_array("Secretariat Studies", $administrativeStaff['Second Qualification']) && in_array("HND",$administrativeStaff['Second Qualification'])){
         $hasHNDOTM=true;
         }
      }
    // Check whether the Clerical Officer has SSCE as his/her highest qualification
      if($administrativeStaff['appointment'] == "Clerical Officer"){
        if(!in_array("SSCE",$administrativeStaff['First Qualification'])){
        array_push($minorDeficienciesAdministrativeStaff,"Clerical officer should have an SSCE");
             if(count($majorDeficienciesAdministrativeStaff)==0){
              $assessment=Assessment::FAIR;
             }
    
            }
        
    }    
    }
   // Include as a major deficiency if Secretary does not have ND or HND in Office Technology Management  
    if(!($hasNDOTM || $hasHNDOTM)){
        array_push($majorDeficienciesAdministrativeStaff, "Secretary should have at least an ND or HND in Office Technology Management");
    }
    // If the Administrative Staffs does not have a Secretary it should be a major deficiency 
  if(!in_array("Secretary",$appointments)){
      array_push($majorDeficienciesAdministrativeStaff,"Secretary is not included amongst administrative staff");
  }
  //if the Administrative Staffs does not have a Clerical officer it should be a major deficiency
  if(!in_array("Clerical Officer", $appointments)){
      array_push($majorDeficienciesAdministrativeStaff, "Clerical Officer is not included amongst administrative staff");
  }
  //if the Administrative Staff does not have a messenger it should be included as a minor deficiency
  if(!in_array("Messenger", $appointments)){
      array_push($minorDeficienciesAdministrativeStaff,"A Messenger is not included amongst Administrative Staff");
      if(count($majorDeficienciesAdministrativeStaff)==0){
        $assessment=Assessment::FAIR;
       }
    }  
    if (count($majorDeficienciesAdministrativeStaff)==0 && count($minorDeficienciesAdministrativeStaff)==0){
        $assessment= Assessment::GOOD;    
     }
// Compile results
    $result=array();
    array_push($this->majorDeficiencies,$majorDeficienciesAdministrativeStaff);
    array_push($this->minorDeficiencies,$minorDeficienciesAdministrativeStaff);
    $result['assessment']=$assessment;
    $result['majorDeficienciesAdministrativeStaff']=$majorDeficienciesAdministrativeStaff;
    $result['minorDeficienciesAdministrativeStaff']=$minorDeficienciesAdministrativeStaff;
    
        return $result;
}

}

