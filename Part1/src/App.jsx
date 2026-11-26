const Header = ({ course }) => <h1>{course}</h1>

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part) => (
      <Part key={part.name} part={part} />
    ))}
  </div>
)

const Total = ({ exercises }) => <p>Number of exercises {exercises}</p>

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={totalExercises} />
    </div>
  )
}

export default App