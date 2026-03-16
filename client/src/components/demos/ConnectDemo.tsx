/**
 * OplyticsConnect Animated Demo — 20-second looping
 * Phases: Device Map, Data Flow, Alert Management, Integration Hub
 */
import { Wifi, Router, Server, Activity, Bell, CheckCircle2 } from 'lucide-react';
import AnimatedDemoShell, { DemoPhaseView } from './AnimatedDemoShell';

const PHASES = [
  { id: 'devices', label: 'Device Map', duration: 5000 },
  { id: 'flow', label: 'Data Flow', duration: 5000 },
  { id: 'alerts', label: 'Alerts', duration: 5000 },
  { id: 'hub', label: 'Integration Hub', duration: 5000 },
];

export default function ConnectDemo() {
  return (
    <AnimatedDemoShell serviceName="OplyticsConnect" accentColor="#3b82f6" phases={PHASES}>
      {(currentPhase, phaseProgress) => (
        <>
          <DemoPhaseView active={currentPhase === 0}>
            <DeviceMapDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 1}>
            <DataFlowDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 2}>
            <AlertDemo progress={phaseProgress} />
          </DemoPhaseView>
          <DemoPhaseView active={currentPhase === 3}>
            <IntegrationHubDemo progress={phaseProgress} />
          </DemoPhaseView>
        </>
      )}
    </AnimatedDemoShell>
  );
}

/* ─── Device Map ─── */
function DeviceMapDemo({ progress }: { progress: number }) {
  const devices = [
    { name: 'PLC-01 Foam Press', type: 'PLC', status: 'online', signal: 98, ip: '192.168.1.10' },
    { name: 'PLC-02 Quilter', type: 'PLC', status: 'online', signal: 95, ip: '192.168.1.11' },
    { name: 'IoT-GW-01 Edge', type: 'Gateway', status: 'online', signal: 100, ip: '192.168.1.100' },
    { name: 'Temp-S01', type: 'Sensor', status: 'online', signal: 87, ip: '192.168.1.201' },
    { name: 'Temp-S02', type: 'Sensor', status: 'warning', signal: 62, ip: '192.168.1.202' },
    { name: 'Vibration-01', type: 'Sensor', status: 'online', signal: 91, ip: '192.168.1.203' },
    { name: 'PLC-03 Packing', type: 'PLC', status: 'offline', signal: 0, ip: '192.168.1.12' },
    { name: 'Current-CT01', type: 'Sensor', status: 'online', signal: 94, ip: '192.168.1.204' },
  ];
  const statusColor: Record<string, string> = { online: '#10b981', warning: '#f59e0b', offline: '#ef4444' };
  const typeIcon: Record<string, typeof Wifi> = { PLC: Server, Gateway: Router, Sensor: Wifi };
  const revealCount = Math.floor(progress * devices.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Device Network — Connected Assets</h3>
        <div className="flex gap-4 mt-1">
          <span className="text-[10px] text-white/60">Online: <span className="text-green-400 font-bold">6</span></span>
          <span className="text-[10px] text-white/60">Warning: <span className="text-yellow-400 font-bold">1</span></span>
          <span className="text-[10px] text-white/60">Offline: <span className="text-red-400 font-bold">1</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-2 gap-2 h-full">
          {devices.map((d, i) => {
            const show = i < revealCount;
            const Icon = typeIcon[d.type] || Wifi;
            return (
              <div key={i} className="flex items-center gap-2 p-2 rounded transition-all duration-400" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: show ? 1 : 0.1, transform: show ? 'scale(1)' : 'scale(0.95)' }}>
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: `${statusColor[d.status]}15` }}>
                  <Icon className="w-4 h-4" style={{ color: statusColor[d.status] }} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-semibold text-white block truncate">{d.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px]" style={{ color: '#596475' }}>{d.ip}</span>
                    <div className="flex items-center gap-0.5">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColor[d.status] }} />
                      <span className="text-[7px] uppercase font-bold" style={{ color: statusColor[d.status] }}>{d.status}</span>
                    </div>
                  </div>
                </div>
                {d.signal > 0 && (
                  <div className="flex flex-col items-center">
                    <span className="text-[9px] font-bold" style={{ color: d.signal > 80 ? '#10b981' : '#f59e0b' }}>{d.signal}%</span>
                    <span className="text-[7px]" style={{ color: '#596475' }}>signal</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Data Flow ─── */
function DataFlowDemo({ progress }: { progress: number }) {
  const streams = [
    { source: 'PLC-01', target: 'Edge Gateway', metric: 'Cycle Time', rate: '1 Hz', value: '12.4s' },
    { source: 'Temp-S01', target: 'Edge Gateway', metric: 'Temperature', rate: '0.5 Hz', value: '72.1°C' },
    { source: 'Current-CT01', target: 'Edge Gateway', metric: 'Power Draw', rate: '10 Hz', value: '4.2 kW' },
    { source: 'Vibration-01', target: 'Edge Gateway', metric: 'RMS Velocity', rate: '100 Hz', value: '2.8 mm/s' },
    { source: 'Edge Gateway', target: 'Oplytics Cloud', metric: 'Batch Upload', rate: '5 min', value: '240 records' },
    { source: 'PLC-02', target: 'Edge Gateway', metric: 'Part Count', rate: '1 Hz', value: '+1' },
  ];
  const revealCount = Math.floor(progress * streams.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #1DB8CE 0%, #0e8a9e 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Live Data Flow — Source to Cloud</h3>
        <p className="text-[10px] text-white/50">Real-time data pipeline from shop floor to analytics</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="grid grid-cols-6 gap-2 px-2 py-1 mb-2" style={{ borderBottom: '1px solid #1e2738' }}>
          {['Source', 'Target', 'Metric', 'Rate', 'Value', 'Status'].map(h => (
            <span key={h} className="text-[8px] font-bold uppercase" style={{ color: '#596475' }}>{h}</span>
          ))}
        </div>
        <div className="space-y-1">
          {streams.map((s, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="grid grid-cols-6 gap-2 px-2 py-2 rounded transition-all duration-400" style={{ background: show ? (i % 2 === 0 ? '#151d2e' : 'transparent') : 'transparent', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-10px)' }}>
                <span className="text-[9px] font-semibold" style={{ color: '#3b82f6' }}>{s.source}</span>
                <span className="text-[9px]" style={{ color: '#1DB8CE' }}>{s.target}</span>
                <span className="text-[9px]" style={{ color: '#c0c6d0' }}>{s.metric}</span>
                <span className="text-[9px]" style={{ color: '#596475' }}>{s.rate}</span>
                <span className="text-[9px] font-bold text-white">{s.value}</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" style={{ opacity: show ? 1 : 0 }} />
                  <span className="text-[8px] uppercase" style={{ color: '#10b981' }}>live</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            { label: 'Messages / sec', value: '142', color: '#3b82f6' },
            { label: 'Avg Latency', value: '23ms', color: '#10b981' },
            { label: 'Uptime', value: '99.97%', color: '#1DB8CE' },
          ].map((m, i) => (
            <div key={i} className="rounded p-2 text-center transition-all duration-300" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: progress > 0.3 + i * 0.2 ? 1 : 0.2 }}>
              <span className="text-[8px] uppercase tracking-wider font-bold block" style={{ color: '#596475' }}>{m.label}</span>
              <span className="text-lg font-black block" style={{ fontFamily: 'Montserrat', color: m.color }}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Alert Management ─── */
function AlertDemo({ progress }: { progress: number }) {
  const alerts = [
    { time: '14:32', severity: 'critical', device: 'PLC-03 Packing', message: 'Device offline — connection lost', ack: true },
    { time: '14:28', severity: 'warning', device: 'Temp-S02', message: 'Signal strength below 70% threshold', ack: false },
    { time: '14:15', severity: 'info', device: 'IoT-GW-01', message: 'Firmware update available (v3.2.1)', ack: false },
    { time: '13:45', severity: 'warning', device: 'Vibration-01', message: 'RMS velocity approaching limit (4.2 mm/s)', ack: true },
    { time: '13:20', severity: 'info', device: 'PLC-01', message: 'Changeover completed — new batch started', ack: true },
    { time: '12:55', severity: 'critical', device: 'Current-CT01', message: 'Power spike detected (8.1 kW)', ack: true },
  ];
  const sevColor: Record<string, string> = { critical: '#ef4444', warning: '#f59e0b', info: '#3b82f6' };
  const revealCount = Math.floor(progress * alerts.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Alert Management — Real-Time Notifications</h3>
        <div className="flex gap-3 mt-1">
          <span className="text-[10px] text-white/60">Critical: <span className="text-red-300 font-bold">2</span></span>
          <span className="text-[10px] text-white/60">Warning: <span className="text-yellow-300 font-bold">2</span></span>
          <span className="text-[10px] text-white/60">Info: <span className="text-blue-300 font-bold">2</span></span>
        </div>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-0">
          {alerts.map((a, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="flex items-center gap-3 px-3 py-2.5 transition-all duration-400" style={{ borderBottom: '1px solid #151d2e', opacity: show ? 1 : 0.1, transform: show ? 'translateY(0)' : 'translateY(8px)' }}>
                <Bell className="w-3.5 h-3.5 flex-shrink-0" style={{ color: sevColor[a.severity] }} />
                <span className="text-[9px] font-mono w-10" style={{ color: '#596475' }}>{a.time}</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded font-bold uppercase" style={{ background: `${sevColor[a.severity]}20`, color: sevColor[a.severity] }}>{a.severity}</span>
                <span className="text-[10px] font-semibold" style={{ color: '#3b82f6' }}>{a.device}</span>
                <span className="text-[9px] flex-1" style={{ color: '#c0c6d0' }}>{a.message}</span>
                {a.ack ? (
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#10b981' }} />
                ) : (
                  <div className="w-14 h-5 rounded flex items-center justify-center text-[8px] font-bold" style={{ background: '#f59e0b20', color: '#f59e0b', border: '1px solid #f59e0b40' }}>ACK</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Integration Hub ─── */
function IntegrationHubDemo({ progress }: { progress: number }) {
  const integrations = [
    { name: 'SCADA / PLC', protocol: 'OPC-UA', status: 'connected', dataPoints: 1240, color: '#3b82f6' },
    { name: 'REST API', protocol: 'HTTPS', status: 'connected', dataPoints: 890, color: '#10b981' },
    { name: 'MQTT Broker', protocol: 'MQTT v5', status: 'connected', dataPoints: 3200, color: '#8C34E9' },
    { name: 'Edge Gateway', protocol: 'gRPC', status: 'connected', dataPoints: 560, color: '#1DB8CE' },
    { name: 'ERP System', protocol: 'REST', status: 'pending', dataPoints: 0, color: '#f59e0b' },
  ];
  const revealCount = Math.floor(progress * integrations.length);

  return (
    <div className="w-full h-full p-4 flex flex-col">
      <div className="rounded-t-md px-4 py-2" style={{ background: 'linear-gradient(135deg, #8C34E9 0%, #5B1FA6 100%)' }}>
        <h3 className="text-sm font-black text-white" style={{ fontFamily: 'Montserrat' }}>Integration Hub — Protocol Connectors</h3>
        <p className="text-[10px] text-white/50">Connect any data source with pre-built protocol adapters</p>
      </div>
      <div className="flex-1 overflow-hidden rounded-b-md p-3" style={{ background: '#0d1220', border: '1px solid #1e2738', borderTop: 'none' }}>
        <div className="space-y-2">
          {integrations.map((integ, i) => {
            const show = i < revealCount;
            return (
              <div key={i} className="rounded-md p-3 transition-all duration-400" style={{ background: '#151d2e', border: '1px solid #1e2738', opacity: show ? 1 : 0.1, transform: show ? 'translateX(0)' : 'translateX(-15px)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md flex items-center justify-center" style={{ background: `${integ.color}15` }}>
                    <Activity className="w-5 h-5" style={{ color: integ.color }} />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-white block" style={{ fontFamily: 'Montserrat' }}>{integ.name}</span>
                    <span className="text-[9px]" style={{ color: '#596475' }}>Protocol: {integ.protocol}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: integ.status === 'connected' ? '#10b981' : '#f59e0b' }} />
                    <span className="text-[9px] uppercase font-bold" style={{ color: integ.status === 'connected' ? '#10b981' : '#f59e0b' }}>{integ.status}</span>
                  </div>
                  {integ.dataPoints > 0 && (
                    <div className="text-right">
                      <span className="text-sm font-black block" style={{ fontFamily: 'Montserrat', color: integ.color }}>{integ.dataPoints.toLocaleString()}</span>
                      <span className="text-[7px]" style={{ color: '#596475' }}>data points/hr</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
