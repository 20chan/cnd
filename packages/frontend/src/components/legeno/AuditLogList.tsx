import { formateDateFullTime, formateDateShortTime } from '#/lib/dates';
import type { LegenoAuditLog } from '#/lib/legeno';

export interface AuditLogListProps {
  auditLogs: LegenoAuditLog[];
}

function parseDetails(details: string) {
  const parts = details.split(',');

  const kvs = parts.map((x) => {
    const [key, value] = x.trim().split('=');
    return { key, value };
  });
  const name = kvs.find((x) => x.key === 'name')?.value ?? '';
  const hash = kvs.find((x) => x.key === 'hash')?.value ?? '';
  const patchHash = kvs.find((x) => x.key === 'patchHash')?.value ?? '';
  return { name, hash, patchHash };
}

export function AuditLogList(props: AuditLogListProps) {
  const { auditLogs } = props;

  return (
    <div className="flex flex-col overflow-y-auto h-full max-h-full">
      {auditLogs.map((auditLog) => (
        <AuditLogRow key={auditLog.id} auditLog={auditLog} />
      ))}
    </div>
  );
}

function AuditLogRow({ auditLog }: { auditLog: LegenoAuditLog }) {
  const { name, hash, patchHash } = parseDetails(auditLog.details);

  const isIpv6 = auditLog.ip.includes(':');
  const ipDiplay = isIpv6
    ? `::::${auditLog.ip.split(':').slice(5).join(':')}`
    : auditLog.ip;

  return (
    <div className="flex flex-row">
      <div className="basis-12 text-muted">{auditLog.id}</div>

      <div className="basis-38 lg:basis-50 text-sm lg:text-base">
        {formateDateFullTime(auditLog.createdAt)}
      </div>

      <div className="basis-22 lg:basis-24 text-sm lg:text-base font-bold">
        {auditLog.uid}
      </div>

      <div className="basis-22 text-sm lg:text-base">{auditLog.action}</div>

      <div className="flex-1 text-sm lg:text-base">{name}</div>

      <div className="basis-24 text-sm leading-6">{hash.substring(0, 8)}</div>

      <div className="basis-24 text-sm leading-6">
        {patchHash.substring(0, 8)}
      </div>

      <div className="basis-40 text-sm leading-6 min-w-0 text-ellipsis overflow-hidden">
        {ipDiplay}
      </div>
    </div>
  );
}
