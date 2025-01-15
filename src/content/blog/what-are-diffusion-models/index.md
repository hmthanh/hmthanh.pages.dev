---
postTitle: "What are Diffusion Models?"
description: "What are Diffusion Models? Diffusion models are inspired by non-equilibrium thermodynamics. They define a Markov chain of diffusion steps to slowly add random noise to data and then learn to reverse the diffusion process to construct desired data samples from the noise. Unlike VAE or flow models, diffusion models are learned with a fixed procedure and the latent variable has high dimensionality (same as the original data)."
date: 2021-07-11
focusKeyphrase: "Twin Lens Reflex love"
datePublished: "2021-04-06T10:31:48.000+0100"
lastUpdated: "2021-04-14T10:17:52.000+0100"
seoMetaDescription: "TLR or Twin Lens Reflex Cameras have the benefit of you being able to hold the camera at waist level to take a picture and get a more engaging camera angle."
featuredImage: "twin-lens-reflex-camera.jpg"
featuredImageAlt: "Photograph of a Rolleicord twin Lens reflex camera"
ogImage: "twin-lens-reflex-camera-open-graph.jpg"
ogSquareImage: "twin-lens-reflex-camera-open-graph-square.jpg"
twitterImage: "twin-lens-reflex-camera-twitter.jpg"
categories: ""
tags: ""
authors:
  - name: Lilian Weng
    link: https://x.com/lilianweng
---

Source : https://lilianweng.github.io/posts/2021-07-11-diffusion-models/

$$\sqrt(x)$$

So far, I've written about three types of generative models, [GAN](https://lilianweng.github.io/posts/2017-08-20-gan/), [VAE](https://lilianweng.github.io/posts/2018-08-12-vae/), and [Flow-based](https://lilianweng.github.io/posts/2018-10-13-flow-models/) models. They have shown great success in generating high-quality samples, but each has some limitations of its own.
GAN models are known for potentially unstable training and less diversity in generation due to their adversarial training nature.
VAE relies on a surrogate loss.
Flow models have to use specialized architectures to construct reversible transform.

Diffusion models are inspired by non-equilibrium thermodynamics. They define a Markov chain of diffusion steps to slowly add random noise to data and then learn to reverse the diffusion process to construct desired data samples from the noise. Unlike VAE or flow models, diffusion models are learned with a fixed procedure and the latent variable has high dimensionality (same as the original data).

![generative-overview](/images/what-are-diffusion-models/generative-overview.png)

Fig. 1. Overview of different types of generative models.

### Classifier-Free Guidance


Their experiments showed that classifier-free guidance can achieve a good balance between FID (distinguish between synthetic and generated images) and IS (quality and diversity).

The guided diffusion model, GLIDE ([Nichol, Dhariwal & Ramesh, et al. 2022](https://arxiv.org/abs/2112.10741)), explored both guiding strategies, CLIP guidance and classifier-free guidance, and found that the latter is more preferred. They hypothesized that it is because CLIP guidance exploits the model with adversarial examples towards the CLIP model, rather than optimize the better matched images generation.

## Scale up Generation Resolution and Quality

![cascaded-diffusion](/images/what-are-diffusion-models/cascaded-diffusion.png)


## References

1. Jascha Sohl-Dickstein et al. ["Deep Unsupervised Learning using Nonequilibrium Thermodynamics."](https://arxiv.org/abs/1503.03585) ICML 2015.
2. Max Welling & Yee Whye Teh. ["Bayesian learning via stochastic gradient langevin dynamics."](https://www.stats.ox.ac.uk/~teh/research/compstats/WelTeh2011a.pdf) ICML 2011.
3. Yang Song & Stefano Ermon. ["Generative modeling by estimating gradients of the data distribution."](https://arxiv.org/abs/1907.05600) NeurIPS 2019.
4. Yang Song & Stefano Ermon. ["Improved techniques for training score-based generative models."](https://arxiv.org/abs/2006.09011) NeuriPS 2020.
5. Jonathan Ho et al. ["Denoising diffusion probabilistic models."](https://arxiv.org/abs/2006.11239) arxiv Preprint arxiv:2006.11239 (2020). [[ode](https://github.com/hojonathanho/diffusion)\]
6. Jiaming Song et al. ["Denoising diffusion implicit models."](https://arxiv.org/abs/2010.02502) arxiv Preprint arxiv:2010.02502 (2020). [[ode](https://github.com/ermongroup/ddim)\]
7. Alex Nichol & Prafulla Dhariwal. ["Improved denoising diffusion probabilistic models"](https://arxiv.org/abs/2102.09672) arxiv Preprint arxiv:2102.09672 (2021). [[ode](https://github.com/openai/improved-diffusion)\]
8. Prafula Dhariwal & Alex Nichol. ["Diffusion Models Beat GANs on Image Synthesis."](https://arxiv.org/abs/2105.05233) arxiv Preprint arxiv:2105.05233 (2021). [[ode](https://github.com/openai/guided-diffusion)\]
9. Jonathan Ho & Tim Salimans. ["Classifier-Free Diffusion Guidance."](https://arxiv.org/abs/2207.12598) NeurIPS 2021 Workshop on Deep Generative Models and Downstream Applications.
10. Yang Song, et al. ["Score-Based Generative Modeling through Stochastic Differential Equations."](https://openreview.net/forum?id=PxTIG12RRHS) ICLR 2021.
11. Alex Nichol, Prafulla Dhariwal & Aditya Ramesh, et al. ["GLIDE: Towards Photorealistic Image Generation and Editing with Text-Guided Diffusion Models."](https://arxiv.org/abs/2112.10741) ICML 2022.
12. Jonathan Ho, et al. ["Cascaded diffusion models for high fidelity image generation."](https://arxiv.org/abs/2106.15282) J. Mach. Learn. Res. 23 (2022): 47-1.
13. Aditya Ramesh et al. ["Hierarchical Text-Conditional Image Generation with CLIP Latents."](https://arxiv.org/abs/2204.06125) arxiv Preprint arxiv:2204.06125 (2022).
14. Chitwan Saharia & William Chan, et al. ["Photorealistic Text-to-Image Diffusion Models with Deep Language Understanding."](https://arxiv.org/abs/2205.11487) arxiv Preprint arxiv:2205.11487 (2022).
15. Rombach & Blattmann, et al. ["High-Resolution Image Synthesis with Latent Diffusion Models."](https://arxiv.org/abs/2112.10752) CVPR 2022.[code](https://github.com/CompVis/latent-diffusion)
