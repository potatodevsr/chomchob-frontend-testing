import axios from 'axios'


export function fetchAPI(options, success = (data) => {}, error = () => {}) {
  const { method = 'GET' } = options

  const config = {
    baseURL: options.baseURL || 'https://cc-quiz-api.herokuapp.com/api/products',
    url: options.url || '',
    method,
    headers: {
      Authorization: 'Bearer b1293253ea005770dc8c28f9b9b30f289c25cc72d3a60c7c4b8cedb26caafdd0622c5394ffc6d083feaf3cbce9126383c04f9091b47412c15ff3dd136274119d8d3850e5b26f0e6a7a70449a5135823d35ccda82e61e79d83ddb5dc40c8fe47b3250bc7e64a14ea8aec1c114fc3f4a0cff4cbbb93ef1e3913efd645300cefe92',
      ...options.headers,
    },
    ...options,
  }

  return axios(config)
    .then(({ data }) => {
      success(data)
      return data
    })
    .catch((err) => {
      error()
      return err
    })
}