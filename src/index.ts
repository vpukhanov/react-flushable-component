import * as React from 'react'

import { FlushableImportReturn } from '@vpukhanov/babel-plugin-flushable-import/dist/flushable-import'

export default function flushable<T extends React.Component>(
  importer: () => FlushableImportReturn<T>
) {}
