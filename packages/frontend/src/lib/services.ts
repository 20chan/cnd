export type Service = ServiceBase & ServiceStackConfig;

export type ServiceKind = 'infra' | 'service';

type ServiceBase = {
  name: string;
  fullName: string;
  kind: ServiceKind;
  category?: string;
  public?: boolean;
  deprecated?: boolean;
  ports?: number[];
  url?: string;
  language?: string;
  stacks?: string[];
  repo?: string;
  tags?: string[];

  path?: string;
  configFile?: string;
  health?: ServiceHealthConfig;

  items?: Service[];
};

export type ServiceHealthConfig =
  | ServiceHealthEnsureConfig
  | ServiceHealthUrlConfig;

type ServiceHealthEnsureConfig = {
  ensure: true;
};

type ServiceHealthUrlConfig = {
  url: string;
};

export type ServiceStack = 'systemd' | 'docker-compose';

export type ServiceStackSystemdConfig = {
  scope: 'user' | 'system';
  unit: string;
};

export type ServiceStackDockerComposeConfig = {
  path: string;
};

export type ServiceStackConfig =
  | { stack: 'systemd'; systemd: ServiceStackSystemdConfig }
  | {
      stack: 'docker-compose';
      'docker-compose': ServiceStackDockerComposeConfig;
    }
  | { stack: 'manual' };
