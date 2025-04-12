async function addCourse(course){
  const API_ENDPOINT = 'http://localhost:3000/api/courses';
  const response = await fetch(
    API_ENDPOINT,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(course)
    }
  )

}