import SideBar from './components/SideBar';
import MainContent from './components/MainContent';

export default function Dashboard() {
    return (
      <div id="wrapper">
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>
    );
}
