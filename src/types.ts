export interface Comment {
  author: string;
  content: string;
  timestamp: string;
  isEdited?: boolean;
}

export interface Approval {
  reviewer: string;
  timestamp: string;
}

export interface Deployment {
  name: string;
  status: string;
  preview: string;
  updated: string;
}

export interface PullRequest {
  id: string;
  title: string;
  author: string;
  branchFrom: string;
  branchTo: string;
  mergeStatus: string;
  mergeTimestamp: string;
  issuesCount: number;
  prCount: number;
  discussionsCount: number;
  comments: Comment[];
  approvals: Approval[];
  deployments: Deployment[];
  labels: string[];
  assignees: string[];
  reviewers: string[];
  milestone: string | null;
  participants: number;
}
