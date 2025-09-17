import { useState } from 'react'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql, GraphQLClient } from 'graphql-request'
import { graphql } from './gql'

const queryClient = new QueryClient()
const graphqlClient = new GraphQLClient('https://graphql.org/graphql/')

function Sample() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

function AllFilms() {
  const { data } = useQuery({
    queryKey: ['allFilms'],
    queryFn: () => graphqlClient.request(graphql(`
      query allFilms {
        allFilms {
          films {
            id
            title
          }
        }
      }
    `)),
  })

  return (
    <div>
      <h2>All Films</h2>
      {data?.allFilms?.films?.map((film) => (
        <div key={film?.id}>{film?.title}</div>
      ))}
    </div>
  )
}

function Body() {
  return (
    <div>
      <Sample />
      <AllFilms />
    </div>
  )
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Body />
    </QueryClientProvider>
  )
}
