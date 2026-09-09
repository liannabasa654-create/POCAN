# Security Policy

## 1. Scope & Authorization

| # | Rule | Value |
|---|------|-------|
| 1.1 | Authorized targets only | 1 |
| 1.2 | Written consent required | 1 |
| 1.3 | Time limit (hrs) | 8 |
| 1.4 | Min severity to report | 2 |

## 2. Risk Matrix

| Severity | Score | Action |
|----------|-------|--------|
| Critical | 9.0–10.0 | Immediate |
| High | 7.0–8.9 | ≤24h |
| Medium | 4.0–6.9 | ≤7d |
| Low | 0.1–3.9 | ≤30d |
| None | 0.0 | Ignore |

## 3. CVSS v3.1

| Component | Range |
|-----------|-------|
| AV | N/A/L/P |
| AC | L/H |
| PR | N/L/H |
| UI | N/R |
| S | U/C |
| C/I/A | N/L/H |

## 4. OWASP Top 10 Weight

| # | Category | Weight |
|---|----------|--------|
| 1 | A01 Broken Access | 25% |
| 2 | A02 Crypto Fail | 20% |
| 3 | A03 Injection | 18% |
| 4 | A05 Misconfig | 12% |
| 5 | Others | 25% |

## 5. Retest Windows

| Severity | Retest (days) |
|----------|---------------|
| Critical | 3 |
| High | 7 |
| Medium | 14 |
| Low | 30 |

## 6. SLA

| Phase | Hours |
|-------|-------|
| Detect | 2 |
| Triage | 4 |
| Escalate | 24 |
| Report | 48 |

## 7. Red Team Rules

| # | Constraint | Value |
|---|------------|-------|
| 7.1 | Max concurrent targets | 3 |
| 7.2 | No destructive payloads | 0 |
| 7.3 | Data exfiltration cap (MB) | 10 |
| 7.4 | DoS duration (min) | 5 |
| 7.5 | Off-hours contact | 0 |

## 8. Scoring Formula

```
Risk = Severity × (1 − Mitigation) × Exposure
```

| Factor | Multiplier |
|--------|-----------|
| Public exposure | 1.0 |
| Internal | 0.6 |
| Unauthenticated | 1.2 |
| Authenticated | 0.7 |

## 9. Reporting

| Field | Required |
|-------|----------|
| ID | 1 |
| CVSS | 1 |
| PoC steps | 1 |
| Fix | 1 |
| CWE/CVE | 1 |
