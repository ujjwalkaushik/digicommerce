"use client"

import { PropsWithChildren, useState } from "react"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { trpc } from "@/trpc/client"
import { httpBatchLink, httpLink } from "@trpc/client"


const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: 'include',
                    })
                }
            })
        ]
        // links: [
        //     httpLink({
        //       url: '/api/trpc',
        //     }),
        // ],
    }))


    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers