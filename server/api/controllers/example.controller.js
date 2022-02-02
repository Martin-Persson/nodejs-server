import { getAllExamples } from '../services/example.service.js'

const exampleController = (req, res) => {
  const example = getAllExamples()
  res.send(example)
}

export { exampleController }
