import './MainHeader.css';

const MainHeader = (props) => {
  return (
    <header className='main-header'>
      {/* special props = always refers to the things we pass between opening and closing tags of the components i.e. here between mainheader */}
      {props.children}
    </header>
  );
};

export default MainHeader;
