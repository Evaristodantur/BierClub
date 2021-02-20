import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';

export default function Dashboard() {
    return (
      <div id="wrapper">
        <SideBar></SideBar>
        <MainContent></MainContent>
      </div>
    );
}
