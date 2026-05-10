
import React from 'react';
import { createServerFn, useServerFn } from '@tanstack/react-start';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const getServerUptime = createServerFn({
  method: 'GET',
}).handler(async () => {
  const execAsync = promisify(exec);
  const { stdout } = await execAsync('uptime -s');
  return { startedAt: stdout.trim() };
});

const getServerMemory = createServerFn({
  method: 'GET',
}).handler(async () => {
  const execAsync = promisify(exec);
  const { stdout } = await execAsync('free -h | awk \'FNR == 2 { print $3, $2 }\'');
  const [used, total] = stdout.trim().split(' ');
  return { used, total };
});

export default function Systems() {
  const getUptime = useServerFn(getServerUptime);
  const getMemory = useServerFn(getServerMemory);

  const [uptime, setUptime] = React.useState<string>('...');
  const [memory, setMemory] = React.useState<string>('...');

  React.useEffect(() => {
    (async () => {
      const { startedAt } = await getUptime();

      const now = new Date();
      const startedDate = new Date(startedAt);
      const diffMs = now.getTime() - startedDate.getTime();

      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

      const uptime = `${days} days, ${hours} hours, ${mins} mins`;
      setUptime(uptime);

      const memoryData = await getMemory();
      setMemory(`${memoryData.used} / ${memoryData.total}`);
    })();
  }, [getUptime, getMemory]);

  return (
    <div className=''>
      <h2 className='font-bold border-b border-fg mb-0.5 uppercase'>
        fetch
      </h2>

      <div>
        <Item name='OS' value='Ubuntu 24.04.2 LTS x86_64' />
        <Item name='Kernel' value='Linux 6.8.0-84-generic' />
        <Item name='Uptime' value={uptime} />
        <Item name='Shell' value='zsh 5.9' />
        <Item name='Host' value='B850 Pro RS' />
        <Item name='CPU' value='AMD Ryzen 9 7950X3D' />
        <Item name='GPU' value='NVIDIA GeForce GTX 960' />
        <Item name='Memory' value={memory} />
      </div>
    </div>
  )
}

function Item({ name, value }: { name: string, value: React.ReactNode }) {
  return (
    <div className='text-sm lg:text-base flex flex-row'>
      <div className='w-28 text-fg-red'>
        {name}:
      </div>
      <div className=''>
        {value}
      </div>
    </div>
  )
}
