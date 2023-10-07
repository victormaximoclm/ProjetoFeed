//JSX = JavaScript + XML
import {Post} from './Post';

export function App() {
  return (
   <div>
    <Post 
    author="Victor Maximo" 
    content="Loren Ipsun....." 
    />

    <Post 
    author="Viviane Matias" 
    content="Outro post" 
    />

   </div>
   
  )
}