import { FC, useState } from 'react'
import { Modal } from './Modal'
import ModalBg from '@/assets/modal/bg-modal.png'
import { Link } from 'react-router-dom'
import Input from '@/ui/Input'
import { Button } from '@/ui/Button'
import { styles } from '@/styles/styles'
import { CustomCheckbox } from '@/ui/CustomCheckbox'
import SuccessIcon from '../svg/SuccessIcon'

interface ModalSubscribeProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const ModalSubscribe: FC<ModalSubscribeProps> = ({ isOpen, setIsOpen }) => {
	const [value, setValue] = useState('');
	const [error] = useState(false);
	const [success] = useState(false);
	return (
		<Modal
			isOpen={isOpen}
			onOpenChange={setIsOpen}
			contentClassName={`subscribe-modal border-none sm:p-7 md:p-16 overflow-hidden sm:max-w-full xsm:max-w-[90%] md:max-w-[37.5rem] sm:top-auto sm:bottom-4 sm:translate-y-0 md:top-1/2 md:bottom-auto md:-translate-y-1/2`}
		>
			<img className="absolute left-0 bottom-0 z-0" src={ModalBg} alt="modal" />
			{
				success ?
					<div className='relative z-10 flex items-center justify-center flex-col gap-y-5'>
						<SuccessIcon width={72} height={72} />
						<h2 className={`text-4xl text-white font-semibold mt-2.5 text-center`}>Successfully!</h2>
						<p className={`leading-5 text-sm text-center text-white w-full max-w-60`}>You can unsubscribe at any time using the link in incoming emails</p>
					</div>
					:
					<div className="relative z-10">
						<p className="text-3xl w-64 text-white mb-5 font-semibold">Subscribe to Our Newsletter</p>
						<p className="text-sm text-white mb-10">Stay updated with real progress — no spam, no noise. Get the latest on how we’re transforming data in Web3. You can unsubscribe at any time. For more information, check our <Link onClick={() => setIsOpen(false)} to="/privacy-policy" className="text-darkTextLink underline">Privacy Policy</Link></p>
						<form>
							<label className='text-sm text-white mb-2 block'>Email</label>
							<div className='flex items-start justify-between gap-2 flex-wrap'>
								<div className={'flex-1 flex flex-col gap-y-2'}>
									<Input error={error} type="email" placeholder="mail@mail.com" value={value} onChange={(e) => setValue(e.target.value)} customStyle='flex-1' />
									{error && <span className='text-darkAccentRed text-xs left-3'>Invailid mail address</span>}
								</div>

								<Button onClick={() => console.log(value)} customStyle={`${styles.buttonStyleAccent} px-8 py-4 items-center text-sm`} variant='primary' link={false} type="button">Subscribe</Button>
							</div>
							<CustomCheckbox id='checkbox' checked label="I agree to receive emails from Liquidity Gate" className='mt-5' />
						</form>
					</div >
			}




		</Modal >
	)
}

export default ModalSubscribe