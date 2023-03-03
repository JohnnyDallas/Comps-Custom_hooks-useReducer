import Accordion from '../components/Accordion';

function AccordionPage() {
   const items = [
    {
        id: 'fgdff',
        lable: 'Can I use React on a project?',
        content: 'You can use React on any projects you want!. You can use React on any projects you want!. You can use React on any projects you want!'
    },
    {
        id: 'dfhgfh',
        lable: 'Can I use JavaScript on a project?',
        content: 'You can use React on any projects you want!. You can use React on any projects you want!. You can use React on any projects you want!'
    },
    {
        id: 'toiytpo',
        lable: 'Can i use CSS on a project?',
        content: 'You can use React on any projects you want!. You can use React on any projects you want!. You can use React on any projects you want!'
    }
  ]; 
    
   return <Accordion items={items} /> 
}

export default AccordionPage; //8