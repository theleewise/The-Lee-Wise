import Image from 'next/image';

type Props = {
	image: any,
	title: string,
	colors?: [string, string],
}

export default function PortfolioThumb({ image, title, colors = ['#eee', '#ccc'] }: Props) {	
	return (
		<div className='min-h-full p-5' style={{
			backgroundImage: `linear-gradient(156deg, ${colors[0]} 0%, ${colors[1]} 100%)`,
		}}>
			<div className='shadow-md'>
				<Image src={image} alt={title} />
			</div>
		</div>
	)
}