import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import PageHeader from './../components/PageHeader'

const AboutPage = () => {
	return (
		<Container maxWidth='lg'>
			<PageHeader
				title='About Page'
				subtitle=''
			/>

			<Grid container spacing={2}>
				<Grid item xs={12} md={8} fontSize={19} alignSelf='center'>
					In today's digital age, it's essential for businesses to have a strong
					online presence. One way to enhance your digital representation is
					through well-designed and professional business cards. However,
					instead of the traditional paper cards, there are now websites that
					allow you to create virtual business cards that can be easily shared
					online. These websites provide user-friendly platforms where you can
					customize and design your own digital business card. You can choose
					from a wide range of templates, colors, fonts, and layouts to create a
					card that aligns with your brand identity. The flexibility of these
					platforms allows you to showcase your creativity and create a unique
					card that stands out from the crowd. One of the advantages of digital
					business cards is their accessibility. They can be easily shared via
					email, social media platforms, QR codes, or embedded on websites. This
					makes it convenient for potential clients or customers to access your
					contact information and learn more about your business with just a
					click. Another benefit of digital business cards is their interactive
					features. Some platforms offer options to include clickable links to
					your website, social media profiles, or product/service pages. This
					interactivity can help drive traffic to your online platforms and
					increase engagement with your target audience. Furthermore, digital
					business cards are eco-friendly, as they eliminate the need for
					printing on paper. This not only reduces waste but also minimizes
					costs associated with printing and reprinting traditional business
					cards. By using these online platforms, you can create a digital
					business card that represents your business professionally and
					effectively. It's a modern and efficient way to make a lasting
					impression on potential clients or customers and build connections in
					the digital realm.
				</Grid>
				<Grid
					item
					xs={4}
					sx={{
						display: { md: 'flex', xs: 'none' },
						justifyContent: 'center',
					}}
				>
					<img src='/assets/images/card.jpg' alt='card' width='100%' />
				</Grid>
			</Grid>
		</Container>
	)
}

export default AboutPage
