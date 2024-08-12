import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Teachers from '../Teachers/Teachers'
import './SelectButtons.css';
import Students from '../Students/Students';

function SelectButtons() {
  const [showTeacher, setShowTeacher] = useState(false);
  const [showStudent, setShowStudent] = useState(false);

  const handleTeacherClick = () => {
    setShowTeacher(true);
  };

  const handleStudentClick = () => {
    setShowStudent(true);
  };

  return (
    <div className='container'>
      {showTeacher ? (
        <Teachers/>
      ) : (showStudent ? (
        <Students />
      ) : (
        <>
          <button className='select' onClick={handleTeacherClick}>Teacher Information</button>
          <button className='select' onClick={handleStudentClick}>Student Information</button>
        
        </>
      ))}
    </div>
  );
}

export default SelectButtons;
