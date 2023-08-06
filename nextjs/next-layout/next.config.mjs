// NEXT CONFIG
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ["@sik/ui"],
  	pageExtensions: ["ts", "tsx", "mdx"],
  	
	

   /** Linting and typechecking are already done as separate tasks in the CI pipeline */
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
}

export default  nextConfig
