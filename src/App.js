import Header from './components/Header.js';
import Item from './components/bg_item.js';
import './App.css';

// images
import Accessories from './assets/Desktop-Accessories.jpg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';

function App() {
  return (
    <div className='App'>
      <Header />
      <Item
        title='Model 3'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={Model3}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
        first='true'
      />
      <Item
        title='Model Y'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelY}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
      />
      <Item
        title='Model S'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelS}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
      />
      <Item
        title='Model X'
        desc='Order Online for Touchless Delivery'
        descLink=''
        backgroundImg={ModelX}
        leftBtnTxt='CUSTOM ORDER'
        leftBtnLink=''
        rightBtnTxt='EXISTING INVENTORY'
        rightBtnLink=''
        twoButtons='true'
      />
      <Item
        title='Solar Panels'
        desc='Lowest Cost Solar Panles in America'
        descLink=''
        backgroundImg={SolarPanels}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
      />
      <Item
        title='Solar Roof'
        desc='Produce Clean Energy From Your Roof'
        descLink=''
        backgroundImg={SolarRoof}
        leftBtnTxt='ORDER NOW'
        leftBtnLink=''
        rightBtnTxt='LEARN MORE'
        rightBtnLink=''
        twoButtons='true'
      />
      <Item
        title='Accessories'
        desc=''
        descLink=''
        backgroundImg={Accessories}
        leftBtnTxt='SHOP NOW'
        leftBtnLink=''
        rightBtnTxt=''
        rightBtnLink=''
        twoButtons='false'
      />
    </div>
  );
}

export default App;
