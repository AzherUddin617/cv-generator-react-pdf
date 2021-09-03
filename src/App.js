import './App.scss';
import { PDFViewer, Font } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';

import MyDocument from './components/MyDocument/MyDocument';
import Resume from './components/resume';

import fontMost from './assets/fonts/Montserrat-Medium.ttf';

Font.register({
  family: 'Montserrat',
  src: fontMost,
});

function App() {
  return (
    <PDFViewer width="99.5%" height="620px">
      <MyDocument />
    </PDFViewer>
  );
}

// ReactPDF.render(<MyDocument />, `${__dirname}/my-document.pdf`);

export default App;
