import { StaticSite, StackContext } from 'sst/constructs'

export default function WebSPAStack({ stack }: StackContext) {
    const webSPA = new StaticSite(stack, 'web-spa', {
       buildOutput: 'dist',
       path: 'apps/web-spa'
    })

    stack.addOutputs({
        WebSpaURL: webSPA.url
    })

    return { webSPA }
}