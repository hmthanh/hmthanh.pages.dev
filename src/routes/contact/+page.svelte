<script>
	import Card from '$lib/components/Card.svelte'
	import EmailIcon from '$lib/icons/email.svelte.txt'
	import website from '$lib/config/website'
	import ExternalLink from '../../layout/ui/a_blank.svelte'
	import Twitter from '$lib/icons/twitter.svelte'

	const { contactEmail } = website
	import SEO from '$lib/components/SEO/index.svelte'

	let title = 'Contact'
	let metadescription = 'Get in touch with Rodneylab, the developer of Climate SvelteKit Starter.'
	const breadcrumbs = [
		{
			name: 'Home',
			slug: ''
		},
		{
			name: 'Contact Us',
			slug: 'contact'
		}
	]
	const seoProps = {
		breadcrumbs,
		title,
		metadescription,
		slug: 'contact',
		datePublished: '2021-07-07T14:19:33.000+0100',
		lastUpdated: '2021-07-07T14:19:33.000+0100'
	}
</script>

<SEO {...seoProps} />
<Card>
	<h1>Contact me</h1>
	<p>I would love to hear from you. Please get in touch!</p>
	<div class="contact-details">
		<ul>
			<li>
				<span class="icon"></span>
				<span class="contact-address">{contactEmail}</span>
			</li>
			<!-- <li>
				<span class="icon"><EmailIcon /></span>
				<span class="contact-address">{contactEmail}</span>
			</li>
			<li>
				<span class="icon"><FacebookIcon /></span><ExternalLink ariaLabel="D M Mdx Blog on Facebook Messenger" href={`https://m.me.${facebookPageName}`}>
					<span class="contact-address"> {facebookPageName}</span>
				</ExternalLink>
			</li>
			<li>
				<span class="icon"><TwitterIcon /></span><ExternalLink ariaLabel="D M Mdx Blog on Twitter" href={`https://twitter.com/messages/compose?recipient-id=${twitterUserId}`}>
					<span class="contact-address">@{twitterUsername}</span>
				</ExternalLink>
			</li>
			<li>
				<span class="icon"><TelegramIcon /></span><ExternalLink ariaLabel="Message Mdx Blog on Telegram" href={`https://t.me/${telegramUsername}`}>
					<span class="contact-address">{telegramUsername}</span>
				</ExternalLink>
			</li>
			<li>
				<span class="icon"><WireIcon /></span>
				<span class="contact-address">{wireUsername}</span>
			</li> -->
		</ul>
	</div>
</Card>

<style lang="scss">
</style>
