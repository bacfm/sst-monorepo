import { NextjsSite, StackContext } from 'sst/constructs'

export default function WebSSRStack({ stack }: StackContext) {
    const webSSR = new NextjsSite(stack, 'web-ssr', {
        edge: true,
        buildCommand: 'npx -y turbo run openbuild',
        path: 'apps/web-ssr'
    })

    stack.addOutputs({
        WebSsrURL: webSSR.url
    })

    return { webSSR }
}