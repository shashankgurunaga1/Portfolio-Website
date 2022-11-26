import Navbar from './Components/Navbar';
import Content from './Components/Body/Content';
import Project from './Components/ProjectCollection/Project';
import Skills from  './Components/Skills/Skills';
import SocialMedia from './Components/SocialMedia/SocialMedia';
function App(){
  return (
    <>
    <Navbar title="Text Conv."/>
    <Content/>
    <Project/>
    
    <Skills/>
    <SocialMedia/>
    </>
  );
}

export default App;
