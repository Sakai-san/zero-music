'use client'

import { ZeroProvider } from '@rocicorp/zero/react'
import type { ZeroOptions } from '@rocicorp/zero'
import type { ReactNode } from 'react'
import { schema } from '../zero/schema'

const opts: ZeroOptions = {
    cacheURL: 'http://localhost:4848',
    schema
}

export function Providers({children}: {children: ReactNode}){
    return <ZeroProvider {...opts}>{children}</ZeroProvider>
}
