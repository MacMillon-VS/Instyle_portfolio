import ins from '../../assets/Instagram_icon.png';
import whats from '../../assets/whatsapp.png';
import call from '../../assets/call.png';
import mail from '../../assets/Gmail_Icon.png';

const Sidebar = () => {
  // <div className='m-4 md:flex justify-end items-center h-8 mx-auto px-4 text-cyan-300 hidden py-4 '>
  return (
    <div className=''>
      <ul className='px:2 fixed right-0 top-1/4 z-50 md:px-3 py-3 flex flex-col space-y-3 '>
        <a target='_blank' href='https://instagram.com/instyle_architect?igshid=ZGUzMzM3NWJiOQ==' rel="noreferrer"><li className='p-4'>
        <img className='w-8 opacity-60 cursor-pointer hover:opacity-100 hover:animate-bounce'
        src={ins} alt='instagram'/>
        </li></a>
        <a target='_blank' href='https://wa.me/+918144001528' rel="noreferrer"><li className='p-4'>
        <img className='w-8 opacity-60 cursor-pointer hover:opacity-100 hover:animate-bounce'
        src={whats} alt='whatsapp'/>
        </li></a>
        <a target='_blank' href='mailto:teamimran96@gmail.com' rel="noreferrer"><li className='p-4'>
        <img className='w-8 opacity-60 cursor-pointer hover:opacity-100 hover:animate-bounce'
        src={mail} alt='email'/>
        </li></a>
        <div className='group'>
        <a href='tel:+918144001528' rel="noreferrer"><li className='p-4'>
        <img className='w-8 opacity-60 cursor-pointer hover:opacity-100 hover:animate-bounce'
        src={call} alt='mobile'/>
        </li></a>
        </div>
        <div className="text-white hidden group-hover:block relative bottom-10 right-[50px] h-10 bg-slate-700">

        <button className="text-white hidden group-hover:block">Hello</button>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;