import { LogEntry } from '@/types'
import { Button, Card, Flex, Title } from '@tremor/react'
import { createRef, MouseEventHandler, useState } from 'react'
import Dialog from './Dialog'

interface Props {
  logEntry: LogEntry
}

const TracebackInfoDialog: React.FC<Props> = ({ logEntry }) => {
  const [open, setOpen] = useState(false)

  return (
    <Flex marginTop="mt-1">
      <Button
        color="rose"
        variant="secondary"
        size="xs"
        onClick={() => setOpen(true)}
      >
        Traceback info
      </Button>

      <Dialog
        isOpen={open}
        title="Traceback info"
        footer={
          <Button
            variant="primary"
            color="indigo"
            onClick={() => {
              setOpen(false)
            }}
          >
            Close
          </Button>
        }
        maxWidth="80%"
        onClose={() => setOpen(false)}
      >
        <div className="flex flex-col" style={{ maxHeight: '90vh' }}>
          <div
            style={{
              minWidth: 350,
              maxWidth: '100%',
              overflow: 'auto',
              flexGrow: 1,
            }}
            className="p-3 my-3 tr-bg-slate-100 rounded-md whitespace-pre font-mono"
          >
            {logEntry.exc_info}
          </div>
        </div>
      </Dialog>
    </Flex>
  )
}

export default TracebackInfoDialog