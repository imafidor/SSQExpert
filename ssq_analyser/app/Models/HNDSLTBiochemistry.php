<?php

namespace App\Models;

class HNDSLTBiochemistry extends SSQ{

    use Child;
    
    
    
    
           
    //protected $table = 'HNDSLTBiochemistrySSQs';
    protected $fillable = ['GoalsAndObjectives', 'Curriculum','Classrooms',
                           'Laboratories', 'StaffOffices', 'Library',
                           'TeachingStaff','ServiceStaff' , 'TechnicalStaff',
                           'HOD' ,'AdministrativeStaff','Recommendations',
                           'MajorDeficiencies','MinorDeficiencies'];
    
    //Tell laravel to fetch text values and set them as arrays
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
    'MinorDeficiencies' => 'array',
    ];
    //Lecturer Cadre
    const RANK_INDEX=array("Higher Instructor","Principal Instructor II","Principal Instructor","Asst Chief Instructor","Chief Instructor","Asst Lecturer","Lecturer III","Lecturer II","Lecturer I","Senior Lecturer","Principal Lecturer", "Chief Lecturer");
       
    // HND SLT Biochemistry Laboratories equipments
    const LABORATORIES   =array("Biochemistry Laboratory"=>  array("Balances"=> 10,
                                                   "Asbestos sheets"=>50,
                                                   "Barometer"=>2,
                                                   "Beehive shelf"=>6,
                                                   "Blowpipe, nickel plated brass"=>20,
                                                   "Test-tube brush" => 30,
                                                   "Centrifuge"=> 2,
                                                   "Buster brush"=> 20,
                                                   "Bunsen burners"=> 30,
                                                   "First aid cabinet"=>2,
                                                   "Clamp for retort stand, die cast aluminium"=> 30,
                                                   "Clip, Hofmann's screw"=> 40,
                                                    "Combustion boat, porcelain"=> 40, 
                                                    "Distillation apparatus"=>5,
                                                    "Electrode carbon plate with terminal"=>6,
                                                    "Filterpump, nickel plate brass"=>2,
                                                    "Fume boards"=>2,
                                                    "Guage with ceramic centre"=> 40,
                                                    "Gloves, (asbestos and rubber)" => 10,
                                                    "Holder for test tubes"=>30,
                                                    "Kipp's apparatus"=>1,
                                                     "Mortar and pestle"=>4,
                                                     "Oven electric,thermostatic control"=>1,
                                                      "Porous pot"=> 3,
                                                      "Printer tape"=> 2,
                                                      "Vacuum pump"=>1,
                                                      "Rack for flasks and test tubes"=>20,
                                                      "Rule, 1 meter"=> 2,
                                                      "Khjedal apparatus"=>5,
                                                      "Spatula"=> 2,
                                                      "Polytechnic sphere for modals"=> 20,
                                                      "Sphints wooden"=> 50,
                                                      "Retort stand with rod"=>5,
                                                      "Steam generator"=>20,
                                                      "Steam trap (all glass)"=>2,
                                                      "Magnetic Stirrer"=> 2,
                                                      "Thermometers"=>4,
                                                      "Tongs"=>20,
                                                       "Tripad"=>40,
                                                       "Voltameter"=>2,
                                                       "Water bath with rings"=>4,
                                                       "Water still manesty"=>1,
                                                       "Refratometer"=> 1,
                                                       "Weighting bottles"=>20,
                                                       "Heating mantle"=>4,
                                                       "Hotplate"=>4,
                                                       "Plastic aspirator"=>4,
                                                       "PH meter"=>4,
                                                       "Portable autoclave"=>2,
                                                       "Muffie furnace"=> 2,
                                                       "Thermostated water bath"=> 2,
                                                        "Mahler-Cook bump calorimeter"=>2,
                                                          "Vacuum dry oven"=>1,
                                                          "Water deioniser"=> 2,
                                                          "Conductivity meter"=>1,
                                                          "Acid shower"=>1,
                                                          "Spectrophotometer-(UV)"=>2,
                                                          "Melting point apparatus"=>2,
                                                          "Wrist type flask shaker"=>3,
                                                          "Soxhlet extraction apparatus"=>2,
                                                          "Colorimeter visual photoelectric"=>1,
                                                           "Flame photometer"=>1,
                                                           "Polarimeter"=>2,
                                                           "Chromatography kits-paper/TLC with spreader for TLC"=>1,
                                                           "Electrophoresis equipment"=>2,
                                                           "Store"=>1,
                                                           "Preparatory room"=>2
    ), "Instrumentation Room"=> array("Analytical Balance"=>5,
                                      "Magnetic Stirrer"=>2,
                                      "Refractometer
                                      Abbe or 
                                      Hand held type"=>1,
                                      "PH Meter"=>4,
                                      "Bomb Calorimeter"=>1,
                                      "Conductivity Meter"=>1,
                                      "Spectrophotometer (UV/Visible)"=>1, 
                                       "Polarimeter"=>1,
                                       "Electrophoresis Equipment"=>1, 
                                       "Infra-red Spectrophotometer (IR)"=>1,
                                       "Gas-Liquid Chromatograph (GLC)"=>1,
                                       "Atomic Absorption Spectrophotometer (AAS)"=>1,
                                        "Spectroflourimeter"=>1,
                                       "High Performance Liquid Chromatograph (HPLC)"=>1));
    
                                       
    
    
     function getGoalsAndObjectives(){
        return['goal'=>'This programme is designed to produce biochemical technologist capable of applying laboratory techniques to complement the work of scientist in industrial and laboratory biochemical analysis and production processes',
           'objective'=>'Carry out biochemical analysis in laboratories in education, food and chemical industries and in research institutes'];
     }                                  
    
    function getLaboratoriesAssessment($labs,$labSpecs, $biochemLab, $instrumentationLab){
        $minorDeficienciesLaboratories=array();
        $majorDeficienciesLaboratories=array();
        $labDeficiencies=array();
        $assessment= Assessment::POOR;
        $inspectedLab['Biochemistry Laboratory']=$biochemLab;
        $inspectedLab['Instrumentation Room']= $instrumentationLab;
       
       
        // Check whether each Laboratory required of HND SLT Biochemistry is specified 
        foreach ($this->getLaboratories() as $lab) {
            if(!in_array($lab, $labs)){
                array_push($majorDeficienciesLaboratories,"{$lab} is needed to run the programme");
                $assessment= Assessment::POOR;
            }
          }
    
          foreach ($this->getLaboratories() as $lab) {
          //  $resStr = str_replace(' ', '_', $lab);
           // $labKey=strtoupper($resStr);
             if(in_array($lab, $labs)){
          //Check whether Lab is too small and if it is, List it as a minor deficiency
                if($labSpecs[$lab]['Area']< 72){
                array_push($minorDeficienciesLaboratories,"{$lab} is to small to run the programme");
                if (count($majorDeficienciesLaboratories)==0){
                    $assessment= Assessment::FAIR;
                 }
            }
      //Check whether Lab is too big and if it is List it as minor deficiency
            if($labSpecs[$lab]['Area'] > 144 ){
                array_push($minorDeficienciesLaboratories,"{$lab} is to large to run the programme");
                if (count($majorDeficienciesLaboratories)==0){
                    $assessment= Assessment::FAIR;
                 }
            }
            // Check whether capacity of the lab is too small and if it is, list it as a minor deficiency
            if($labSpecs[$lab]['Capacity']< 40 ){
                array_push($minorDeficienciesLaboratories,"{$lab} should be able to accommodate at least one stream");
                if (count($majorDeficienciesLaboratories)==0){
                    $assessment= Assessment::FAIR;
                 }
            }
       
           }
          }
    
          foreach ($this->getLaboratories() as $lab) {
           //Check for all the item deficiencies in each of the laboratories to be inspected and include the item deficiencies amongst the List of deficiencies
            if(in_array($lab, $labs)){
                foreach($this::LABORATORIES[$lab] as $item => $count) { 
                    // if item does not exist in the lab, it should be listed amongst the item deficiencies
                    if (!array_key_exists($item, $inspectedLab[$lab])){
                    $labDeficiencies[$lab]=  array($item=>$count);
                    }
                    // if item count is not up to half the required count, it should be listed as a deficiency
                    if (array_key_exists($item, $inspectedLab[$lab])&& $inspectedLab[$lab][$item] < $count/2){
                        $labDeficiencies[$lab]=  array($item=>$count);
                        }
            }
            // if item deficiencies is up to more than half of the overall item count it should be listed as a major deficiency
            if(count($labDeficiencies[$lab])>count($this::LABORATORIES[$lab])/2 ){          
                array_push($majorDeficienciesLaboratories,"Items in the {$lab} are inadequate to run the programme");  
                $assessment= Assessment::POOR;   
            }
               
            }
            
    }
    
    if (count($majorDeficienciesLaboratories)==0 && count($minorDeficienciesLaboratories)==0){
        $assessment= Assessment::GOOD;    
     }
    
    // Compile results
    $result=array();
    array_push($this->majorDeficiencies,$majorDeficienciesLaboratories);
    array_push($this->minorDeficiencies,$minorDeficienciesLaboratories);
    $result['assessment']=$assessment;
    $result['majorDeficienciesLaboratories']=$majorDeficienciesLaboratories;
    $result['minorDeficienciesLaboratories']=$minorDeficienciesLaboratories;
    $result['labDeficiencies']=$labDeficiencies;
        return $result;
    }
    
    function getLibraryAssessment($librarySpecs,$books,$ebooks,$journals,$ejournals,$schoolPopulation){
        $minorDeficienciesLibrary=array();
        $majorDeficienciesLibrary=array();
        $assessment= Assessment::POOR;
        $specializations= array();
        $ebookSpecializations= array();
        $ebookVariations= array();
        $variations= array();
        $noOfVariations=0;
        $expiredJournals=0;
        $expiredEJournals=0;
        $deficientVolumes=0;
        //array_push($minorDeficienciesLaboratories,"{$lab} is to small to run the programme");
    // if the area of the library is small it should be a major deficiency
    if($librarySpecs['Area']< 200 ){
        array_push($majorDeficienciesLibrary,"Library is to small to run the programme");
        $assessment= Assessment::POOR;
    }
    // if the capacity of the library is small it should be a major deficiency  
     if($librarySpecs['Capacity']< 200 ){
        array_push($majorDeficienciesLibrary,"Capacity of library is to small to run the programme");
        $assessment= Assessment::POOR;
       }
    
    
       //Check books and ebooks for specializations and count the number of deficiencies
       foreach ($books as $book) {
       array_push($specializations,$book['Specializations']);
    if($book["Number Of Copies"] < 6){
        $deficientVolumes++;
    }    
    }
    //Compile ebook Specializations
    foreach($ebooks as $ebook){
        array_push($ebookSpecializations, $ebook['Specializations']);
    }
    //Check whether more than half of the books are deficient in volumes and if it is count it as a major deficiency 
    if($deficientVolumes > count($books)/2){
    array_push($majorDeficiencies,"Most of the titles of the books are deficient in Number of Copies to satisfy one-third of the stream");
    $assessment= Assessment::POOR;
    }
        
       $variations=array_unique($specializations);
       $noOfVariations= count($variations);
       $ebookVariations=array_unique($ebookSpecializations);
       //Check whether books have enough varieties of specializations and if it is count it as a major deficiency 
       if($noOfVariations < count($this->getCoreSpecializations)/2){
           array_push($majorDeficienciesLibrary,"Variety of Book Title Specializations are not enough");
           $assessment= Assessment::POOR;
        }
    
       foreach($this->getCoreSpecializations as $specialization){
        //Check for array specializations in hard copies    
        if(!in_array($specialization,$variations)){
               array_push($minorDeficienciesLibrary,"{$specialization} is not available amongst Library hard copies");
                if (count($majorDeficienciesLibrary)==0){
                    $assessment= Assessment::FAIR;
                 }
                 //Check for specializations in soft copies
               foreach($ebooks as $ebook){
                 if(!in_array($specialization, $ebookVariations)){
                    array_push($majorDeficienciesLibrary,"{$specialization} is not available amongst Library hard copies and ebooks");
                    $assessment= Assessment::POOR;
                }
               }
           
            }
          
    
        }
     //Check  and count for journals and determine whether they are out of date by five years
        foreach($journals as $journal){
           if ($journal['Date'] < date('Y') - 5){
               $expiredJournals++;
           }
       }
       // Check  and count for ejournals and determine whether they are out of date for at least five years  
       foreach($ejournals as $ejournal){
             if($ejournal['Date'] < date('Y') - 5){
                 $expiredEJournals++;
             }
       }
    //Check and count whether more than half of the journals are expired and if it is, it is a major deficiency
       if($expiredJournals  > count($journals)/2){
       array_push($majorDeficienciesLibrary,"Most of the journals are not current");
       $assessment= Assessment::POOR;   
    }
    //Check and count whether more than half of the ejournals are expired and if it is, it is a major deficiency
       if($expiredEJournals > count($ejournals)/2){
           array_push($majorDeficienciesLibrary, "Most of your ejournals have expired subscribe to recent ones");
           $assessment= Assessment::POOR;
        }
        // Check and count whether the journals are enough in quantity 
       if(count($journals) < 6){
           array_push($majorDeficienciesLibrary,"Journals available are few");
           $assessment= Assessment::POOR;
        }
        // Check and count whether the ejournals are enough in quantity 
       if(count($ejournals) < 6){
    array_push( $majorDeficienciesLibrary, "E journals available are few subscribe to more");
    $assessment= Assessment::POOR;   
    }
    //Determine if the assessment should be good
    if (count($majorDeficienciesLibrary)==0 && count($minorDeficienciesLibrary)==0){
       $assessment= Assessment::GOOD;    
    }
    
    // Compile results
    $result=array();
    array_push($this->majorDeficiencies,$majorDeficienciesLibrary);
    array_push($this->minorDeficiencies,$minorDeficienciesLibrary);
    $result['assessment']=$assessment;
    $result['majorDeficienciesLibrary']=$majorDeficienciesLibrary;
    $result['minorDeficienciesLibrary']=$minorDeficienciesLibrary;
    
        return $result;
    }
    function getTeachingStaffAssessment($coreLecturers){
        $minorDeficienciesTeachingStaff=array();
        $majorDeficienciesTeachingStaff=array();
        $assessment= Assessment::POOR;
        $belowLecturerTwo=0;
        $aboveSeniorLecturer=0;
        $withMasters=0; 
        $withBiochemistry=0;  
       
       
       
        foreach($coreLecturers as $coreLecturer){
       //Count for lecturers below Lecturer II
        if(array_search($coreLecturer['Rank'], this::RANK_INDEX) < 7){
            array_push($minorDeficienciesTeachingStaff,"{$coreLecturer['Name']} is not qualified to teach HND");
            $belowLecturerTwo++;
        }
        // Count for lecturers above Lecturer II
        if(array_search($coreLecturer['Rank'], this::RANK_INDEX) >= 9){
            $aboveSeniorLecturer++;
        }
    // Count for lecturers with Biochemistry qualification 
        foreach($coreLecturer as $key => $item){    
            if($key=="First Qualification"){
          if(in_array("Biochemistry",$coreLecturer['First Qualification'])){
            $withBiochemistry++;
            break;
          }
             }
             if($key=="Second Qualification"){
                if(in_array("Biochemistry",$coreLecturer['Second Qualification'])){
                  $withBiochemistry++;
                  break;
                }
                   }  
                   if($key=="Third Qualification"){
                    if(in_array("Biochemistry",$coreLecturer['Third Qualification'])){
                      $withBiochemistry++;
                      break;
                    }
                       }
                       if($key=="Fourth Qualification"){
                        if(in_array("Biochemistry",$coreLecturer['Fourth Qualification'])){
                          $withBiochemistry++;
                          break;
                        }
                           }
            
                           if($key=="Fifth Qualification"){
                            if(in_array("Biochemistry",$coreLecturer['Fifth  Qualification'])){
                              $withBiochemistry++;
                              break;
                            }
                               }
            
                }
                // Count lecturers with Msc Degrees ->'This code might be optimized in the future'
        foreach($coreLecturer as $key => $item){
        if($key=="First Qualification"){
      if(in_array("Msc",$coreLecturer['First Qualification'])){
        $withMasters++;
        break;
      }
         }
         if($key=="Second Qualification"){
            if(in_array("Msc",$coreLecturer['Second Qualification'])){
              $withMasters++;
              break;
            }
               }  
               if($key=="Third Qualification"){
                if(in_array("Msc",$coreLecturer['Third Qualification'])){
                  $withMasters++;
                  break;
                }
                   }
                   if($key=="Fourth Qualification"){
                    if(in_array("Msc",$coreLecturer['Fourth Qualification'])){
                      $withMasters++;
                      break;
                    }
                       }
        
                       if($key=="Fifth Qualification"){
                        if(in_array("Msc",$coreLecturer['Fifth  Qualification'])){
                          $withMasters++;
                          break;
                        }
                           }
        
            }
    }
    // Check whether the count of the core lecturers are enough. if not it is poor    
    if(count($coreLecturers) < 4 ){
        array_push($majorDeficienciesTeachingStaff,"No of Lecturers not enough to cover the programme");
    $assessment= Assessment::POOR; 
    }
    // Check for Lecturers with rank qualified to teach HND are enough. if not it is poor
    if(count($coreLecturers)  -  $belowLecturerTwo  < 4 ){
    array_push($majorDeficienciesTeachingStaff, "Not enough Lecturers with ranks qualified to teach the programme");
    $assessment= Assessment::POOR;
    }    
    // Check for Lecturers with masters degree. If they are not enough it is poor 
    if($withMasters < 4){
        array_push($majorDeficienciesTeachingStaff,"Not enough Lecturers with masters degree qualified to teach the programme");
    $assessment= Assessment::POOR;
    }
    //Check for Lecturers with Biochemistry specialization. if they are not enough it is poor
    if($withBiochemistry < 4){
        array_push($majorDeficienciesTeachingStaff, "Not enough Lecturers with Biochemistry qualification to teach the programme");
    $assessment = Assessment::POOR;
    }
    //{IGNORE ME} $this->requiredNoOfStaffOffices= round(((count($coreLecturers)  -  $aboveSeniorLecturer)* 0.5) + $aboveSeniorLecturer);
    
    if (count($majorDeficienciesTeachingStaff)==0 && count($minorDeficienciesTeachingStaff)==0){
        $assessment= Assessment::GOOD;    
     }
    //Compile results
    $result=array();
    array_push($this->majorDeficiencies,$majorDeficienciesTeachingStaff);
    array_push($this->minorDeficiencies,$minorDeficienciesTeachingStaff);
    $result['assessment']=$assessment;
    $result['majorDeficienciesTeachingStaff']=$majorDeficienciesTeachingStaff;
    $result['minorDeficienciesTeachingStaff']=$minorDeficienciesTeachingStaff;
    
    return $result;
    }
    
    function getServiceStaffAssessment($serviceLecturers){
        $minorDeficienciesServiceLecturer=array();
        $majorDeficienciesServiceLecturer=array();
        $serviceQualificationsProvided= array();
        $serviceCoursesProvided= array();
        $serviceCoursesRequired= array_keys($this->getServiceCourses());
        $assessment= Assessment::POOR;
        $belowLecturerTwo=0;
        $serviceQualifications= array_unique(array_values($this->getServiceCourses()));
        $notQualifiedToTeachTheCourse=0;
        $withMasters=0;
        
        foreach($serviceLecturers as $serviceLecturer){
        // Check for service lecturers below lecturer two
            if(array_search($serviceLecturer['Rank'], this::RANK_INDEX) < 7){
                array_push($minorDeficienciesServiceLecturer,"{$serviceLecturer['Name']} is not qualified to teach HND");
                $belowLecturerTwo++;
            }
            foreach($serviceLecturer as $key => $item){
       
                //Compile Service courses provided 
                if(in_array($serviceLecturer['Course To Teach'], $serviceCoursesRequired)){
                 array_push($serviceCoursesProvided, $serviceLecturer['Course To Teach']);                                          
                }
                
       //Search each credential for the qualification required
                if($key=="First Qualification"){
                    foreach($serviceQualifications as $qualification){
                if(in_array($qualification,$serviceLecturer['First Qualification'])){
                    array_push($serviceQualificationsProvided, $qualification);
                    break 2;
                  }
                }
                
                    
                 }
                 if($key=="Second Qualification"){
                    foreach($serviceQualifications as $qualification){
                    if(in_array($qualification,$serviceLecturer['Second Qualification'])){
                        array_push($serviceQualificationsProvided, $qualification);
                      break 2;
                    }
                }
                       }  
                       if($key=="Third Qualification"){
                        foreach($serviceQualifications as $qualification){
                        if(in_array($qualification,$serviceLecturer['Third Qualification'])){
                            array_push($serviceQualificationsProvided, $qualification);
                          break 2;
                        }
                    }
                           }
                           if($key=="Fourth Qualification"){
                            foreach($serviceQualifications as $qualification){
                            if(in_array($qualification,$serviceLecturer['Fourth Qualification'])){
                                array_push($serviceQualificationsProvided, $qualification);
                              break 2;
                            }
                               }
                            }
                               if($key=="Fifth Qualification"){
                                foreach($serviceQualifications as $qualification){
                                if(in_array($qualification,$serviceLecturer['Fifth  Qualification'])){
                                    array_push($serviceQualificationsProvided, $qualification);
                                  break 2;
                                }
                                   }
                                }
                
                    }
           //Count the Service Lecturers with masters degree qualification 
              foreach($serviceLecturer as $key => $item){
            if($key=="First Qualification"){
          if(in_array("Msc",$serviceLecturer['First Qualification'])){
            $withMasters++;
            break;
          }
             }
             if($key=="Second Qualification"){
                if(in_array("Msc",$serviceLecturer['Second Qualification'])){
                  $withMasters++;
                  break;
                }
                   }  
                   if($key=="Third Qualification"){
                    if(in_array("Msc",$serviceLecturer['Third Qualification'])){
                      $withMasters++;
                      break;
                    }
                       }
                       if($key=="Fourth Qualification"){
                        if(in_array("Msc",$serviceLecturer['Fourth Qualification'])){
                          $withMasters++;
                          break;
                        }
                           }
            
                           if($key=="Fifth Qualification"){
                            if(in_array("Msc",$serviceLecturer['Fifth  Qualification'])){
                              $withMasters++;
                              break;
                            }
                               }
            
                }
    //if loop doesn't break then lecturer is not qualified to teach the course
            array_push($minorDeficienciesServiceLecturer,"{$serviceLecturer['Name']} is not qualified to teach the course");
               $notQualifiedToTeachTheCourse++;
                if(count($majorDeficienciesServiceLecturer)==0){
                $assessment= Assessment::FAIR;
           }           
            }    
        // Check whether each service course has been provided with the service lecturers
            foreach($serviceCoursesRequired as $serviceCourseRequired){
             if (!in_array($serviceCourseRequired,$serviceCoursesProvided)){
                array_push($majorDeficienciesServiceLecturer,"No Service Lecturer provided for {$serviceCourseRequired}");
                $assessment= Assessment::POOR;
             }
            
            }
            //Check whether the count of service lecturers is enough. if not, assessment is poor
            if(count($serviceLecturers) < count($this->getServiceCourses())/2 ){
            array_push($majorDeficienciesServiceLecturer, "Not enough Service Lecturers to teach required service courses");
            $assessment= Assessment::POOR;
            }    
            //Check the amount of service lecturers with masters. If not, assessment  is poor
            if($withMasters < count($this->getServiceCourses())){
                array_push($minorDeficienciesServiceLecturer,"Not enough  Service Lecturers with masters degree qualified to teach the programme");
            if(count($majorDeficienciesServiceLecturer)==0){
                $assessment= Assessment::FAIR;
                 } 
                }   
                //Check whether the lecturers not qualified to teach the course is enough. If not it is poor
             if($notQualifiedToTeachTheCourse > count($this->getServiceCourses())/2){
              array_push($majorDeficienciesServiceLecturer,"Most of the Lecturers are not qualified to teach their respective courses");
              $assessment= Assessment::POOR; 
            }
        
    
            if (count($majorDeficienciesServiceLecturer)==0 && count($minorDeficienciesServiceLecturer)==0){
                $assessment= Assessment::GOOD;    
             }
            //Compile results
            $result=array();
            array_push($this->majorDeficiencies,$majorDeficienciesServiceLecturer);
            array_push($this->minorDeficiencies,$minorDeficienciesServiceLecturer);
            $result['assessment']=$assessment;
            $result['majorDeficienciesServiceStaff']=$majorDeficienciesServiceLecturer;
            $result['minorDeficienciesServiceStaff']=$minorDeficienciesServiceLecturer;        
            return $result;
    }
    function getTechnicalStaffAssessment($technicalStaffs){
     $hasProffessionalBody= 0;  
     $minorDeficienciesTechnicalStaff=array();
     $majorDeficienciesTechnicalStaff=array();
     $assessment= Assessment::POOR;
     $withBiochemistry=0;
     $noOfTechnologists=0; 
     $labsMountedByTechnologists= array();
     $labsMountedByTechnicians= array();
     foreach($technicalStaffs as $technicalStaff){
        //{IGNORE ME}$technicalStaffQualification=true;
          
       // Compile labs mounted by technologists  
        if($technicalStaff['Rank']== "Technologist"){
                $noOfTechnologists++;
               array_push($labsMountedByTechnologists,$technicalStaff['Lab to be mounted']);
           //Check whether the Technologists are registered
               if($technicalStaff['Proffessional Body']!="NISLT"){
             array_push($majorDeficienciesTechnicalStaff, "One of your Technical Staff {$technicalStaff['Name']} is a Technologist without proffessional body qualification");
             $assessment= Assessment::POOR;
            }    
            // Check both whether the staff is not qualified and the required number of technologists is not enough to mount the labs. if not, it is poor. 
           if(!in_array("SLT",$technicalStaff['First Qualification'])|| !in_array("ND",$technicalStaff['First Qualification'])){
            if(count($technicalStaff) <= count($this->getLaboratories())){
            array_push($majorDeficienciesTechnicalStaff, "{$technicalStaff['Name']} is a Technologist without necessary basic qualification");
              $assessment = Assessment::POOR;    
        }else{
            //If the staff is not qualified and the number of technologists is enough to mount the required number of labs for the programme, It  fair and a minor deficiency
                array_push($minorDeficienciesTechnicalStaff, "One of your Technical Staff {$technicalStaff['Name']} is a Technologist without necessary basic qualification");
            if(count($majorDeficienciesTechnicalStaff==0)){
                $assessment= Assessment::FAIR;
            }
            }    
        }
     //Check both whether the staff has both an HND SLT Biochemistry qualification as a Technologist and the number of technologists is enough to mount the required number of labs for the programme. If not, it is poor and a major deficiency.
        if(!in_array("Biochemistry",$technicalStaff['Second Qualification'])|| !in_array("HND",$technicalStaff['Second Qualification'])){
            if(count($technicalStaff) <= count($this->getLaboratories())){
            array_push($majorDeficienciesTechnicalStaff, "{$technicalStaff['Name']} is a Technologist without necessary higher qualification");
            }else{
                //If the staff does not have HND SLT Biochemistry qualification and the number of technologists required to mount the labs is enough, it is fair
                array_push($minorDeficienciesTechnicalStaff, "One of your Technical Staff {$technicalStaff['Name']} is a Technologist without necessary higher qualification");
                if(count($majorDeficienciesTechnicalStaff==0)){
                    $assessment= Assessment::FAIR;
                }
                }
            }    
        } 
                // If the technician does not have an ND in SLT and the number of labs required is not enough, then it is poor
                if($technicalStaff['Rank']== "Technician"){
                    array_push($labsMountedByTechnicians,$technicalStaff['Lab to be mounted']);
                    if(!in_array("SLT",$technicalStaff['First Qualification']) || !in_array("ND",$technicalStaff['First Qualification'])){
                      if(count($technicalStaff) <= count($this->getLaboratories())*2){
                      array_push($majorDeficienciesTechnicalStaff, "{$technicalStaff['Name']} is a Technician without necessary basic qualification");
                      }else{
                       // If the technician does not have an ND in SLT but the number of labs required is  enough, then it is fair and also a minor deficiency
                        array_push($minorDeficienciesTechnicalStaff, "One of your Technical Staff {$technicalStaff['Name']} is a Technician without necessary basic qualification");
                          if(count($majorDeficienciesTechnicalStaff==0)){
                            $assessment= Assessment::FAIR;
                        }
                        }    
                  }
                  
                          
                }
     
            }//forloop ends here
     
     
     
     // Check whether each lab is mounted by a technologist.If not, it is a major deficiency
     foreach($this->getLaboratories as $lab){
         if(!in_array($lab, $labsMountedByTechnologists)){
            array_push($majorDeficienciesTechnicalStaff, "{$lab} is not mounted by any Technologist");   
            $assessment= Assessment::POOR;
        }
        //Check whether each lab is mounted by a technician if not it is poor 
        if(!in_array($lab, $labsMountedByTechnicians)){
            array_push($majorDeficienciesTechnicalStaff, "{$lab} is not mounted by any Technician");   
            $assessment= Assessment::POOR;
        }
        }
        if (count($majorDeficienciesTechnicalStaff)==0 && count($minorDeficienciesTechnicalStaff)==0){
            $assessment= Assessment::GOOD;    
         }
        // Compile results
        $result=array();
            array_push($this->majorDeficiencies,$majorDeficienciesTechnicalStaff);
            array_push($this->minorDeficiencies,$minorDeficienciesTechnicalStaff);
            $result['assessment']=$assessment;
            $result['majorDeficienciesServiceStaff']=$majorDeficienciesTechnicalStaff;
            $result['minorDeficienciesServiceStaff']=$minorDeficienciesTechnicalStaff;        
            return $result;
    }
    function getHODAssessment($HOD){
        $majorDeficienciesHOD= array();
        $minorDeficienciesHOD= array();
        $assessment= Assessment::POOR;
    
    foreach($HOD as $key => $item){
        if($key=="First Qualification"){
            // Check whether HOD has a basic qualification in Biochemistry. if not it is poor
            if(!in_array("Bsc",$HOD['First Qualification']) && !in_array("Biochemistry",$HOD['First Qualification'])){
             array_push($majorDeficienciesHOD, "HOD does not have necessary Basic Bsc qualification in biochemistry to head the departmment");
             $assessment = Assessment::POOR; 
            }
               }
               // Check whether HOD has masters qualification. If not it is poor
            if($key=="Second Qualification"){
                if(!in_array("Msc", $HOD['Second Qualification'])){
            array_push($majorDeficienciesHOD, "HOD does not have masters qualification to head the department");
            $assessment = Assessment::POOR;         
        }
    // Check whether none of the related higher qualification is picked. If not it is poor
        if(in_array("None",$HOD['Second Qualification'])){
                array_push($majorDeficienciesHOD,"HOD does not have related higher qualification to run the programme");
                $assessment = Assessment::POOR; 
            }
    
            }
            // Check whether HOD has up to 12 years of experience. If not it is poor
            if($key=="Years of Experience"){
                if($item < 12){
          array_push($majorDeficienciesHOD,"HOD does not have up to the required experience to run the department");
        $assessment = Assessment::POOR;        
        }    
             }
             // Check whether HOD has the rank of a Senior Lecturer
           if($key=="Rank"){
            if(array_search($item, this::RANK_INDEX) < 9){
             array_push($majorDeficienciesHOD, "HOD is not up to the rank of Senior Lecturer");
             $assessment = Assessment::POOR; 
            }
            }
            // Check whether HOD is registered with a proffessional body. if not it is a minor deficiency.
    if($key=="ProffessionalBody"){
        if($item=="None"){
            array_push($minorDeficienciesHOD,"HOD is not registered with any proffessional body");
          if(count($majorDeficienciesHOD==0)){
              $assessment=Assessment::FAIR;
          }
        }
    }
            
        }
    
        if (count($majorDeficienciesHOD)==0 && count($minorDeficienciesHOD)==0){
            $assessment= Assessment::GOOD;    
         }
    // Compile results
        $result=array();
        array_push($this->majorDeficiencies,$majorDeficienciesHOD);
        array_push($this->minorDeficiencies,$minorDeficienciesHOD);
        $result['assessment']=$assessment;
        $result['majorDeficienciesHOD']=$majorDeficienciesHOD;
        $result['minorDeficienciesHOD']=$minorDeficienciesHOD;        
        return $result;
    }
    function getDivision(){
        return true;
    }
    
    function getProffessionalBodies(){
        return true;
    }
    function getProffessionalBodyResourcePerson(){
        return 'NILST REP';
    }
    function getServiceCourses(){
        $serviceCourses = array('GNS 301'=> "English",'GNS 302'=> "English", 'COM 301'=>"Computer Science",'EDP 413'=> "Business Admin", "GNS 401"=>"English");
        return $serviceCourses;
    }
    function getServiceSpecializations(){
        return true;
    }
    
    function getNoOfResourcePersons(){
        return 2;
    
    }
    function getMinimumKeyEquipments(){
        return true;
    }
    
    function getCoreSpecializations(){
        return array("General Biochemistry","Nutritional Biochemistry","Enzymology or Industrial Biochemistry","Biotechnology","Clinical Biochemistry");
    }
    function getLaboratories(){
        $labs= array("Biochemistry Laboratory", "Instrumentation Room");
        return $labs;
    }
    
    
    }