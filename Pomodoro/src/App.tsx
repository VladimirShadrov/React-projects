export default function App() {
  // const myObj = {
  //   description: 'Моя вторая задача',
  //   status: 'Новая',
  //   task_title: 'Задача 2',
  // };
  async function fetchData() {
    const response = await fetch('https://aacceayuhyrqxhtdbfli.supabase.co/rest/v1/pomodoro', {
      headers: {
        apikey:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhY2NlYXl1aHlycXhodGRiZmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5NjcyMDksImV4cCI6MjAyOTU0MzIwOX0._xv368W0XrDkw1fmZtioW2PredTIDBcD_UC7PanJv_c',
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const data = await response.json();

    console.log('Data: ', data);
  }

  fetchData();
  console.log('Монтируюсь');

  fetchData();
  return <h1>Привет React</h1>;
}
