//JSX = JavaScript + XML
import {Post} from './Post';
import { Header } from './components/header';

import './styles.css';

export function App() {
  return (
   <div>
    <Header />

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