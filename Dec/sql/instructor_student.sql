SELECT instructor.name AS instructor_name, student.name AS student_name 
   FROM student
   JOIN studentcourse
       ON student.id = studentcourse.student_id
    JOIN instructorcourse
       ON studentcourse.course_id = instructorcourse.course_id
    JOIN instructor
       ON instructorcourse.instructor_id = instructor.id;