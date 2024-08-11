// import React, { useState } from 'react';
// import Students from '../Students/Students';
// import './SelectButtons.css';

// function SelectButtons() {
//   const [showTeacherDashboard, setShowTeacherDashboard] = useState(false);
//   const [showStudentDashboard, setShowStudentDashboard] = useState(false);

//   const handleTeacherClick = () => {
//     setShowTeacherDashboard(true);
//   };

//   const handleStudentClick = () => {
//     setShowStudentDashboard(true);
//   };

//   return (
//     <div className='container'>
//       {showTeacherDashboard || showStudentDashboard ? (
//         <Students userType={showTeacherDashboard ? 'teacher' : 'student'} />
//       ) : (
       
//         <>
//           <button className='select' onClick={handleTeacherClick}>Teacher Information</button>
//           <button className='select' onClick={handleStudentClick}>Student Information</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default SelectButtons;
import React, { useState } from 'react';
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
