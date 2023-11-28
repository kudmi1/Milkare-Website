import { useCommissionContext } from '../Providers/CommissionContext'
import { useLanguageContext } from '../Providers/LanguageContext'
import Socials from './Socials'
import CommissionMobile from './CommissionMobile'
import Commission from './Commission'
import ProfileContent from './ProfileContent'

export default function Profile({ loaded }) {
	const { language } = useLanguageContext()
	const { commissionStatus } = useCommissionContext()

	return (
		<section className='absolute bottom-0 flex h-[300px] w-full flex-col items-center rounded-b-lg border-b border-thinLine bg-gradient-to-b from-[#191924ef] to-[#1600419a] py-4 text-mainText backdrop-blur-md lg:h-[300px]'>
			<Commission
				commissionStatus={commissionStatus}
				language={language}
				loaded={loaded}
			/>

			<CommissionMobile
				commissionStatus={commissionStatus}
				language={language}
			/>

			<ProfileContent language={language} />
		</section>
	)
}
