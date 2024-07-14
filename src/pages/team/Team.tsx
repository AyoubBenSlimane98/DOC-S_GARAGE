import team from '../../assets/team.webp';
import CardTeam from '../../components/CardTeam';
import ImagePage from '../../components/ImagePage';
import team1 from '../../assets/team-1.webp';
import team2 from '../../assets/team-2.webp';
import team3 from '../../assets/team-3.webp';
import team4 from '../../assets/team-4.webp';
import SubTitles from '../../components/SubTitles';
import CardTeams from '../../components/CardTeams';
import gp_1 from '../../assets/gp-1.webp';
import gp_2 from '../../assets/gp-2.webp';
import gp_3 from '../../assets/gp-3.webp';
import gp_4 from '../../assets/gp-4.webp';
import gp_5 from '../../assets/gp-5.webp';
import gp_6 from '../../assets/gp-6.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/variants';
const teams = [
  { title: 'Edward Williams', image: gp_1 },
  { title: 'Raheem Paunds', image: gp_2 },
  { title: 'David Brown', image: gp_3 },
  { title: 'Timothy Saheel', image: gp_4 },
  { title: 'Ulrich Deiter', image: gp_5 },
  { title: 'Christopher Anderson', image: gp_6 },
];

const Team = () => {
  return (
    <main className=' overflow-hidden'>
      <ImagePage {...{ title: 'Our team', image: team }} />
      <section className='grid grid-cols-1 px-4 md:grid-cols-2 md:gap-12  md:px-8 pt-20 lg:gap-16'>
        <div className='flex flex-col items-center sm:items-stretch py-12 gap-14 md:py-0 md:gap-12'>
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.25, value: 175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <SubTitles
              {...{
                titleleft: 'Our best',
                titleright: 'team',
                classright: 'text-red-color lg:text-[3.2rem] pl-2',
                classleft: 'lg:text-[3.25rem]',
                classDiv: 'items-center pb-6 md:items-start md:pb-7',
                classTitle:
                  'text-[2.5rem] pb-6  md:text-[2.7rem] md:pb-6   font-semibold',
              }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.25, value: -175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.1 }}
          >
            <CardTeam
              title='Richard Denim'
              image={team1}
            />
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.25, value: 175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <CardTeam
              title='Tom Ferris'
              image={team2}
            />
          </motion.div>
        </div>
        <div className=' flex flex-col items-center gap-14 md:gap-12 '>
          <motion.div
            variants={fadeIn({ direction: 'left', delay: 0.25, value: -175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <CardTeam
              title='Ezra Muali'
              image={team3}
            />
          </motion.div>
          <motion.div
            variants={fadeIn({ direction: 'right', delay: 0.25, value: 175 })}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0 }}
          >
            <CardTeam
              title='Gerard Butler'
              image={team4}
            />
          </motion.div>
        </div>
      </section>
      <section className='flex flex-col items-center  p-8  gap-4 w-full h-auto md:grid  md:grid-cols-3 md:gap-10 md:p-10 lg:gap-14 lg:justify-evenly lg:items-center lg:p-10 bg-global'>
        {teams.map((team) => (
          <CardTeams
            key={team.title}
            {...team}
          />
        ))}
      </section>
    </main>
  );
};

export default Team;
